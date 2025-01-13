"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectButton = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const LoginModal_1 = require("./LoginModal");
const ConnectButton = (props) => {
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const { onConnect } = props;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Button, { variant: "contained", size: "large", onClick: () => setIsOpen(true), sx: {
                borderRadius: 2,
                textTransform: 'none',
                py: 1.5,
                px: 3
            } }, "Connect Wallet"),
        isOpen && (react_1.default.createElement(LoginModal_1.LoginModal, { onClose: () => setIsOpen(false), onConnect: onConnect }))));
};
exports.ConnectButton = ConnectButton;
