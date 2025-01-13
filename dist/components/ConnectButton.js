"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectButton = void 0;
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const LoginModal_1 = require("./LoginModal");
const ConnectButton = (props) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
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
