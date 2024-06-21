// Components/Loading.js
import React from 'react';
import { FaSpinner } from 'react-icons/fa'; // Import an icon from react-icons

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <FaSpinner className="text-blue-500 animate-spin" size={48} />
    </div>
  );
};

export default Loading;
