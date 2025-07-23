import React, { useState, useEffect } from 'react';
import { adminPanel } from '../lib/AdminPanel';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DisplayResSideNav = ({open}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        const pathToItem = {
          '/dashboard': 'Dashboard',
          '/orders': 'Orders',
          '/track': 'Track',
          '/wallet': 'Wallet',
          '/driver': 'Drivers',
          '/profile': 'Profile',
        };
        setSelectedItem(pathToItem[location.pathname] || null);
    }, [location.pathname]);
    
    const handleItemClick = (name) => {
        setSelectedItem(name);
        const itemToPath = {
          Dashboard: '/dashboard',
          Orders: '/orders',
          Track: '/track',
          Wallet: '/wallet',
          Drivers: '/driver',
          Profile: '/profile',
        };
        navigate(itemToPath[name]);
    };

    return (
        open && (
            <>
                <motion.div 
                    className='md:hidden block mt-28 bg-gray-50 w-full absolute rounded'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {
                        adminPanel.map((item, index) => (
                            <motion.div 
                                className={`flex items-center ${
                                    selectedItem === item.name ? 'bg-red-800 text-white' : 'text-black'
                                } gap-3 p-5 text-xl mb-5 w-[50%] ml-5 rounded-2xl`} 
                                key={index}
                                onClick={() => handleItemClick(item.name)}
                                whileHover={{ scale: 1.05, backgroundColor: '#f1f1f1' }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.2 }}
                            >
                                <img className='w-5 h-5' src={item.img} alt="" />
                                <p>{item.name}</p>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </>
        )
    ) 
}

export default DisplayResSideNav