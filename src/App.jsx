
import './App.css'
import Home from './pages/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
function App() {
  return(
<div>
  <Router>
    <Routes>
   <Route path='/'exact element={<Home />} /> 
   <Route path='DashBoard' exact element={<Dashboard />} /> 
    </Routes>
  </Router>
    </div>

  )
  
}

export default App
