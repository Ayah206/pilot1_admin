import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import SideBar from './components/sidebar';
import Dashboard from './screens/dashboard';
import Admins from './screens/adminsManagement';
import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import ManageCities from './screens/manageCities';
import ManageDrivers from './screens/manageDrivers';
import ManageRiders from './screens/manageRiders';
import ManageVehicles from './screens/manageVehicles';
import ManageDocs from './screens/manageDocs';
import ManageEmails from './screens/manageEmails';
import ManageManualBookings from './screens/manageManualBookings';
import AdditionalReasons from './screens/additionalReasons';
import CancellationReasons from './screens/cancellationReasons';
import ManageLocations from './screens/manageLocations';
import FairManagement from './screens/fairManagement';
import TripsManagement from './screens/tripsManagement';
import ManagePayouts from './screens/managePayouts';
import ManageOweAmount from './screens/manageOweAmount';
import ManageStatements from './screens/manageStatements';
import ManageWallets from './screens/manageWallet';
import Referrals from './screens/referrals';
import ManageMap from './screens/manageMap';
import ManageMobile from './screens/manageMobile';
import Login from './screens/login';
import Hotbtn from './screens/hotbtn';
import AddAdmin from './screens/addAdmin';
import AddCity from './screens/addCity';


const theme = createTheme({
  palette: {
    secondary: {
      main: '#ffffff',
    },
    primary:{
      main: '#EF6C33',
    },
    info:{
      main: '#000000'
    },
    warning:{
      main: '#f0f0f0'
    }
  
  },
  components: {
    MuiButtonBase: {
      defaultProps:{
        disableRipple: true 
      }     
    }
  }
  
});
function App() {
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path = '/login' element = {<Login/>} />
        <Route path = '/' element = {<Navigate to= "/dashboard" />} />
            <Route path = '/admins-management' element = {<SideBar><Admins/></SideBar> } />
            <Route path = '/dashboard' element = {<SideBar><Dashboard /></SideBar>} />
            <Route path = '/manage-cities' element = {<SideBar><ManageCities /></SideBar> } />
            <Route path = '/manage-drivers' element = { <SideBar><ManageDrivers /></SideBar> } />
            <Route path = '/manage-riders' element = {<SideBar><ManageRiders /></SideBar> } />
            <Route path = '/manage-Vehicles' element = {<SideBar><ManageVehicles /></SideBar>} />
            <Route path = '/manage-documents' element = {<SideBar><ManageDocs/></SideBar>} />
            <Route path = '/manage-emails' element = {<SideBar><ManageEmails /></SideBar>} />
            <Route path = '/manage-manual-bookings' element = {<SideBar><ManageManualBookings /></SideBar>} />
            <Route path = '/additional-reasons' element = {<SideBar><AdditionalReasons /></SideBar>} />
            <Route path = '/cancellation-reasons' element = {<SideBar><CancellationReasons /></SideBar>} />
            <Route path = '/manage-locations' element = {<SideBar><ManageLocations /></SideBar>} />
            <Route path = '/fair-management' element = {<SideBar><FairManagement /></SideBar>} />
            <Route path = '/trips-management' element = {<SideBar><TripsManagement /></SideBar>} />
            <Route path = '/manage-payouts' element = {<SideBar><ManagePayouts /></SideBar>} />
            <Route path = '/manage-owe-amount' element = {<SideBar><ManageOweAmount /></SideBar>} />
            <Route path = '/manage-statements' element = {<SideBar><ManageStatements /></SideBar>} />
            <Route path = '/manage-wallets' element = {<SideBar><ManageWallets /></SideBar>} />
            <Route path = '/referrals' element = {<SideBar><Referrals /></SideBar>} />
            <Route path = '/manage-map' element = {<SideBar><ManageMap /></SideBar>} />
            <Route path = '/manage-mobile' element = {<SideBar><ManageMobile /></SideBar>} />
            <Route path = '/hotbtn' element = {<Hotbtn />} />
            <Route path = '/admins-management/add' element = {<SideBar><AddAdmin/></SideBar>} />
            <Route path = '/manage-cities/add' element = {<SideBar><AddCity/></SideBar>} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
} 

export default App;
