import React from 'react';
import { LoginMethod } from '../types';
interface LoginModalProps {
    onClose: () => void;
    onConnect: (method: LoginMethod) => Promise<void>;
    buttonColor?: string;
}
declare const LoginModal: (props: LoginModalProps) => React.JSX.Element;
export { LoginModal };
