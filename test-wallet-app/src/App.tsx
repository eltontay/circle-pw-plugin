import React from 'react';
import { ConnectButton } from 'circle-pw-embed-sdk';
import './App.css';

const wallet = new CircleWallet({
  enabledLoginMethods: ['email', 'google']
});

function App() {
  const handleConnect = async (method: string) => {
    try {
      await wallet.connect(method);
      console.log('Connected!');
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ConnectButton 
        onConnect={handleConnect}
        enabledMethods={['email', 'google']}
      />
    </div>
  );
}

export default App;
