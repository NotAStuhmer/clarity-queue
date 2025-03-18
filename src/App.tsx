import React from 'react';
import logo from './assets/logo.png';

const App: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <img src={logo} alt='Clarity Queue Logo' className='w-48 h-auto' />
      <h1 className='text-2xl font-bold mt-4'>Welcome to Clarity Queue!</h1>
    </div>
  );
};

export default App;
