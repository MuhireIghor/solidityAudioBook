import {useState,useEffect} from 'react';
import {gapi} from 'gapi-script';
import {GoogleLogin,GoogleLogout} from 'react-google-login';
import logo from '../assets/Solidify Logo 2.png'

const Home = () => {
const clientId = "1078126596971-h9fbu5ul383u15fitvmbd0qd4k9pl3uh.apps.googleusercontent.com";
const [profile,setProfile] = useState([]);
useEffect(()=>{
  const initClient = ()=>{
    gapi.client.init({
      clientId:clientId,
      scope:'email,password ',
      SameSite:'None'      
    })
  }
  gapi.load('client:auth2',initClient)
})
const onSuccess = (res)=>{
setProfile(res.profileObj)
}
const onFailure = (err)=>{
  console.log('failed',err);
}
const logout = ()=>{
  setProfile(null);
}
  return (
    <div className="flex flex-col items-center  bg-black w-screen h-screen  ">
<img src={logo} />
<div className='bg-black flex flex-col items-center space-y-6'>
<p className='text-white text-2xl font-bold'>Login With</p>


<GoogleLogin  

className='w-32 ' 
onSuccess={onSuccess}
onFailure={onFailure}
buttonText={'Google'}
cookiePolicy={'single_host_origin'}
isSignedIn={true}
render = {renderProps=>(
  <button onClick={renderProps.onClick} disabled={renderProps.disabled } className='bg-black border-2 border-[#F5F5F5] px-8 py-2 text-[#94A3B8] text-center'>Google</button>
)}


/>

<div className='flex items-baseline space-x-1'>
    <p className='text-[#94A3B8] text-md'>Don't have account?</p>
    <p className='text-[16px] font-semibold text-white'>Create One</p>
</div>

</div>
{/* <GoogleLogout buttonText='Logot with Google' onLogoutSuccess={logout} /> */}
    </div>
  )
}

export default Home;