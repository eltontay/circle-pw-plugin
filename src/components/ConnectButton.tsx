import React from 'react';
import { LoginModal } from './LoginModal';
import { LoginMethod } from '../types';

interface ConnectButtonProps {
  onConnect: (method: LoginMethod) => Promise<void>;
  className?: string;
  buttonColor?: string;
}

const ConnectButton = (props: ConnectButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { onConnect, className = '', buttonColor = 'bg-violet-500 hover:bg-violet-600' } = props;

  return (
    <div>
      <button 
        className={`${buttonColor} text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 ${className}`}
        onClick={() => setIsOpen(true)}
      >
        Login or sign up
      </button>
      
      {isOpen && (
        <LoginModal
          onClose={() => setIsOpen(false)}
          onConnect={onConnect}
          buttonColor={buttonColor}
        />
      )}
    </div>
  );
};

export { ConnectButton }; 