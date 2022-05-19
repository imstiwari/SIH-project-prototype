import './App.css';
import Signup from './Pages/Sign-Up';

import Signin from './Pages/Sign-In';
import Home from './Pages/home';
import Appoitments from './Pages/appointments';
import UserProfile from './Pages/UserProfile'
import Service from './Pages/Services'
import Maps from './Pages/Map'
import  Grid from './Pages/report'
import {
  Routes,
  Route,
} from 'react-router-dom';

const App=() => {
  return <>
    
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/signin" element={<Signin />} />
      <Route  path="/signup" element={<Signup />} />
      <Route  path="/user/profile" element={<UserProfile />} />
      <Route  path="/user/appointment" element={<Appoitments />} />
      <Route  path="/user/services" element={<Service />} />
      <Route  path="/user/map" element={<Maps />} />
      <Route  path="/user/report" element={<Grid />} />
    </Routes>
        
 </>
    
 
}

export default App;
