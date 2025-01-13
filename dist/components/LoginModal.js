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
exports.LoginModal = void 0;
const react_1 = __importStar(require("react"));
const fc_1 = require("react-icons/fc");
const fa_1 = require("react-icons/fa");
const hi_1 = require("react-icons/hi");
const io5_1 = require("react-icons/io5");
const LoginModal = ({ onClose, onConnect }) => {
    const [email, setEmail] = (0, react_1.useState)('');
    return (react_1.default.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" },
        react_1.default.createElement("div", { className: "bg-white rounded-2xl p-6 w-[400px] max-w-full" },
            react_1.default.createElement("div", { className: "flex justify-between items-center mb-6" },
                react_1.default.createElement("div", { className: "text-xl font-bold" }, "Login or sign up"),
                react_1.default.createElement("button", { onClick: onClose, className: "text-gray-500 hover:text-gray-700" },
                    react_1.default.createElement(io5_1.IoCloseOutline, { className: "w-6 h-6" }))),
            react_1.default.createElement("div", { className: "mb-4" },
                react_1.default.createElement("div", { className: "flex items-center border rounded-lg p-2" },
                    react_1.default.createElement("input", { type: "email", placeholder: "your@email.com", value: email, onChange: (e) => setEmail(e.target.value), className: "flex-1 outline-none px-2" }),
                    react_1.default.createElement("button", { className: "bg-black text-white px-4 py-1 rounded-lg", onClick: () => onConnect('email') }, "Submit"))),
            react_1.default.createElement("div", { className: "space-y-3" },
                react_1.default.createElement("button", { onClick: () => onConnect('google'), className: "w-full border rounded-lg p-3 flex items-center gap-3 hover:bg-gray-50" },
                    react_1.default.createElement(fc_1.FcGoogle, { className: "w-5 h-5" }),
                    "Google"),
                react_1.default.createElement("button", { onClick: () => onConnect('apple'), className: "w-full border rounded-lg p-3 flex items-center gap-3 hover:bg-gray-50" },
                    react_1.default.createElement(fa_1.FaApple, { className: "w-5 h-5" }),
                    "Apple")),
            react_1.default.createElement("button", { className: "w-full border rounded-lg p-3 mt-3 flex items-center justify-between hover:bg-gray-50" },
                react_1.default.createElement("span", { className: "flex items-center gap-3" },
                    react_1.default.createElement(hi_1.HiDotsHorizontal, { className: "w-5 h-5" }),
                    "More options"),
                react_1.default.createElement("span", null, "\u203A")),
            react_1.default.createElement("div", { className: "mt-4 text-center" },
                react_1.default.createElement("button", { className: "text-blue-600 hover:text-blue-700" }, "I have a passkey")))));
};
exports.LoginModal = LoginModal;
