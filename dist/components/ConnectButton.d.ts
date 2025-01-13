import React from 'react';
import { LoginMethod } from '../types';
interface ConnectButtonProps {
    onConnect: (method: LoginMethod) => Promise<void>;
    className?: string;
    buttonColor?: string;
}
declare const ConnectButton: (props: ConnectButtonProps) => React.JSX.Element;
export { ConnectButton };
