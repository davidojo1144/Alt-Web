import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { adminPanel } from '../lib/AdminPanel';

const AdminPanel = () => {
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
    <div className="md:w-[20%] lg:p-8 md:p-4 p-8">
      <h1 className="text-red-500 text-xl font-bold">Admin</h1>
      <div className="mt-5 ml-[5%] space-y-10">
        {adminPanel.map((item, index) => (
          <div
            className={`flex items-center ${
              selectedItem === item.name ? 'bg-red-800 text-white' : 'text-black'
            } gap-3 cursor-pointer rounded-full px-4 py-2 w-[45%] md:w-[80%]`}
            key={index}
            onClick={() => handleItemClick(item.name)}
          >
            <img className="w-5 h-5" src={item.img} alt={item.name} />
            <p className="text-md font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;