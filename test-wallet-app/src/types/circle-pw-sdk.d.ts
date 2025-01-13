declare module 'circle-pw-sdk' {
  export interface ConnectButtonProps {
    onConnect: (method: string) => Promise<void>;
    buttonColor?: string;
    className?: string;
  }
  
  export const ConnectButton: React.FC<ConnectButtonProps>;
  // Add other exports from your SDK
}
