import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Kyc from './pages/Kyc';
import Dashboard from "./pages/Dashboard"
import AdminPanel from './components/AdminPanel';
import Profile from './pages/Profile';
import Drivers from './pages/Drivers';
import Wallet from './pages/Wallet';
import Track from './pages/Track';
import Orders from './pages/Orders';
import ResponsiveSideNav from './components/ResponsiveSideNav';
import ActiveDelivery from './pages/ActiveDelivery';
import PendingDelivery from './pages/PendingDelivery';
import SuccessfulDelivery from './pages/SuccessfulDelivery';
import TotalDelivery from './pages/TotalDelivery';
import BusinessProfile from './pages/BusinessProfile';
import EditProfile from './pages/EditProfile';
import EditBusiness from './pages/EditBusiness';
import SupportAndHelp from './pages/SupportAndHelp';


const AdminLayout = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      <AdminPanel />
      <ResponsiveSideNav/>
      <div className="flex-1 bg-gray-50 min-h-screen"> 
        <Outlet/>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AnimatePresence mode='wait'>
      <div className='overflow-x-hidden'>
        <Routes>
          <Route path="/" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Login/> </motion.div> } />
          <Route path="/signup" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <SignUp/> </motion.div> } />
          <Route path="/kyc" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Kyc/> </motion.div> } />
          <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Dashboard/> </motion.div> }/>
            <Route path="/profile" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Profile/> </motion.div> } />
            <Route path="/editprofile" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <EditProfile/> </motion.div> } />
            <Route path="/driver" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Drivers/> </motion.div> } />
            <Route path="/wallet" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Wallet/> </motion.div> } />
            <Route path="/track" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Track/> </motion.div> } />
            <Route path="/orders" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Orders/> </motion.div> } />
            <Route path="/activedeliveries" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <ActiveDelivery/> </motion.div> } />
            <Route path="/pendingdeliveries" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <PendingDelivery/> </motion.div> } />
            <Route path="/successfuldeliveries" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <SuccessfulDelivery/> </motion.div> } />
            <Route path="/totaldeliveries" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <TotalDelivery/> </motion.div> } />
            <Route path="/businessprofile" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <BusinessProfile/> </motion.div> } />
            <Route path="/editbusiness" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <EditBusiness/> </motion.div> } />
            <Route path="/supportandhelp" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <SupportAndHelp/> </motion.div> } />
          </Route>
        </Routes>
      </div>
    </AnimatePresence>

  )
}

export default App
