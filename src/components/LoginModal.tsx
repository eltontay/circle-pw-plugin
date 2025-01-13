import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { LoginMethod } from '../types';

interface LoginModalProps {
  onClose: () => void;
  onConnect: (method: LoginMethod) => Promise<void>;
  buttonColor?: string;
}

const LoginModal = (props: LoginModalProps) => {
  const [email, setEmail] = React.useState('');
  const [showEmailInput, setShowEmailInput] = React.useState(false);
  const { onClose, onConnect, buttonColor = 'bg-violet-500 hover:bg-violet-600' } = props;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 w-[400px] max-w-[95%] shadow-xl relative">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <IoCloseOutline className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900">Login or sign up</h2>
        </div>

        {showEmailInput ? (
          <div className="space-y-4">
            <div className="flex items-center border rounded-xl p-3 focus-within:ring-2 focus-within:ring-violet-500 transition-all">
              <MdOutlineEmail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 outline-none text-gray-800"
              />
            </div>
            <button 
              className={`${buttonColor} w-full text-white py-3 rounded-xl font-medium transition-colors`}
              onClick={() => onConnect('email')}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <button 
              onClick={() => setShowEmailInput(true)}
              className="w-full border rounded-xl p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-gray-700"
            >
              <MdOutlineEmail className="w-5 h-5" />
              <span className="flex-1 text-left">Continue with email</span>
            </button>
            
            <button 
              onClick={() => onConnect('google')}
              className="w-full border rounded-xl p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-gray-700"
            >
              <FcGoogle className="w-5 h-5" />
              <span className="flex-1 text-left">Continue with Google</span>
            </button>
            
            <button 
              onClick={() => onConnect('apple')}
              className="w-full border rounded-xl p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-gray-700"
            >
              <FaApple className="w-5 h-5" />
              <span className="flex-1 text-left">Continue with Apple</span>
            </button>

            <button 
              className="w-full border rounded-xl p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-gray-700"
            >
              <HiDotsHorizontal className="w-5 h-5" />
              <span className="flex-1 text-left">More options</span>
              <span className="text-gray-400">›</span>
            </button>
          </div>
        )}

        {/* Passkey Option */}
        <div className="mt-6 text-center">
          <button className="text-violet-600 hover:text-violet-700 text-sm font-medium">
            I have a passkey
          </button>
        </div>

        {/* Protected by Privy */}
        <div className="mt-6 text-center text-xs text-gray-500">
          Protected by Privy
        </div>
      </div>
    </div>
  );
};

export { LoginModal }; 