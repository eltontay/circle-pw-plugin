import React from 'react';
import { LoginMethod } from '../types';
interface LoginModalProps {
    onClose: () => void;
    onConnect: (method: LoginMethod) => Promise<void>;
    enabledMethods: LoginMethod[];
}
export declare const LoginModal: React.FC<LoginModalProps>;
export {};
