import React from 'react';
import { LoginMethod } from '../types';

interface LoginModalProps {
  onClose: () => void;
  onConnect: (method: LoginMethod) => Promise<void>;
  enabledMethods: LoginMethod[];
}

export const LoginModal: React.FC<LoginModalProps> = ({
  onClose,
  onConnect,
  enabledMethods,
}) => {
  const handleConnect = async (method: LoginMethod) => {
    try {
      await onConnect(method);
      onClose();
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white p-6 rounded-lg w-[400px] max-w-[90%]"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Connect Your Wallet</h2>
        {enabledMethods.map(method => (
          <button
            key={method}
            onClick={() => handleConnect(method)}
            className="w-full py-3 px-4 mb-2 border border-blue-500 rounded-lg hover:bg-blue-50 flex items-center justify-center gap-2"
          >
            {method.charAt(0).toUpperCase() + method.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}; 