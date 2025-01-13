import React from 'react';
import { LoginMethod } from '../types';
interface ConnectButtonProps {
    onConnect: (method: LoginMethod) => Promise<void>;
}
export declare const ConnectButton: React.FC<ConnectButtonProps>;
export {};
