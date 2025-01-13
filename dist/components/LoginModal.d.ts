import React from 'react';
import { LoginMethod } from '../types';
interface LoginModalProps {
    onClose: () => void;
    onConnect: (method: LoginMethod) => Promise<void>;
}
export declare const LoginModal: React.FC<LoginModalProps>;
export {};
