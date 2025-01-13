import React from 'react';
import { Button } from '@mui/material';
import { LoginModal } from './LoginModal';
import { LoginMethod } from '../types';

interface ConnectButtonProps {
  onConnect: (method: LoginMethod) => Promise<void>;
  className?: string;
  buttonColor?: string;
}

const ConnectButton = (props: ConnectButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { onConnect } = props;

  return (
    <>
      <Button
        variant="contained"
        size="large"
        onClick={() => setIsOpen(true)}
        sx={{
          borderRadius: 2,
          textTransform: 'none',
          py: 1.5,
          px: 3
        }}
      >
        Connect Wallet
      </Button>
      
      {isOpen && (
        <LoginModal
          onClose={() => setIsOpen(false)}
          onConnect={onConnect}
        />
      )}
    </>
  );
};

export { ConnectButton }; 