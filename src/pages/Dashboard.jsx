import React from 'react'
import Sidebar from '../components/Sidebar'
import UserView from '../components/UserView'

const Dashboard = () => {
  return (
    <div className='flex gap-4'>
      <div className='basis-2/12'>
      <Sidebar />
      </div>
      <div className='basis-10/12'>
        <UserView/>
      </div>
    </div>
  )
}

export default Dashboard