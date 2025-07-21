import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Kyc from './pages/Kyc';
import Roles from './pages/Roles';
import AdminPanel from './components/AdminPanel';


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
            <Route path="/roles" element={<Roles />} />
          </Route>
        </Routes>
      </div>
    </AnimatePresence>

  )
}

export default App
