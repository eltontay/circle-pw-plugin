import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import { LoginMethod } from '../types';

interface LoginModalProps {
  onClose: () => void;
  onConnect: (method: LoginMethod) => Promise<void>;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onClose, onConnect }) => {
  const [email, setEmail] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-[400px] max-w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-bold">Login or sign up</div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <IoCloseOutline className="w-6 h-6" />
          </button>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <div className="flex items-center border rounded-lg p-2">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 outline-none px-2"
            />
            <button 
              className="bg-black text-white px-4 py-1 rounded-lg"
              onClick={() => onConnect('email')}
            >
              Submit
            </button>
          </div>
        </div>

        {/* Social Logins */}
        <div className="space-y-3">
          <button 
            onClick={() => onConnect('google')}
            className="w-full border rounded-lg p-3 flex items-center gap-3 hover:bg-gray-50"
          >
            <FcGoogle className="w-5 h-5" />
            Google
          </button>
          
          <button 
            onClick={() => onConnect('apple')}
            className="w-full border rounded-lg p-3 flex items-center gap-3 hover:bg-gray-50"
          >
            <FaApple className="w-5 h-5" />
            Apple
          </button>
        </div>

        {/* More options */}
        <button 
          className="w-full border rounded-lg p-3 mt-3 flex items-center justify-between hover:bg-gray-50"
        >
          <span className="flex items-center gap-3">
            <HiDotsHorizontal className="w-5 h-5" />
            More options
          </span>
          <span>›</span>
        </button>

        {/* Passkey Option */}
        <div className="mt-4 text-center">
          <button className="text-blue-600 hover:text-blue-700">
            I have a passkey
          </button>
        </div>
      </div>
    </div>
  );
}; 