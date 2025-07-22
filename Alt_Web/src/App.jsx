import React from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
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


const AdminLayout = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <AdminPanel />
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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/driver" element={<Drivers />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/track" element={<Track />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>
    </AnimatePresence>

  )
}

export default App
