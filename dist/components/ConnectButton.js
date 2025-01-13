"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectButton = void 0;
const react_1 = __importDefault(require("react"));
const LoginModal_1 = require("./LoginModal");
const ConnectButton = (props) => {
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const { onConnect, className = '', buttonColor = 'bg-violet-500 hover:bg-violet-600' } = props;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("button", { className: `${buttonColor} text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 ${className}`, onClick: () => setIsOpen(true) }, "Login or sign up"),
        isOpen && (react_1.default.createElement(LoginModal_1.LoginModal, { onClose: () => setIsOpen(false), onConnect: onConnect, buttonColor: buttonColor }))));
};
exports.ConnectButton = ConnectButton;
