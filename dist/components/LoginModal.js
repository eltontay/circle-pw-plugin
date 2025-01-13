"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModal = void 0;
const react_1 = __importDefault(require("react"));
const fc_1 = require("react-icons/fc");
const fa_1 = require("react-icons/fa");
const hi_1 = require("react-icons/hi");
const io5_1 = require("react-icons/io5");
const md_1 = require("react-icons/md");
const LoginModal = (props) => {
    const [email, setEmail] = react_1.default.useState('');
    const [showEmailInput, setShowEmailInput] = react_1.default.useState(false);
    const { onClose, onConnect, buttonColor = 'bg-violet-500 hover:bg-violet-600' } = props;
    return (react_1.default.createElement("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm" },
        react_1.default.createElement("div", { className: "bg-white rounded-3xl p-8 w-[400px] max-w-[95%] shadow-xl relative" },
            react_1.default.createElement("button", { onClick: onClose, className: "absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors" },
                react_1.default.createElement(io5_1.IoCloseOutline, { className: "w-6 h-6" })),
            react_1.default.createElement("div", { className: "text-center mb-8" },
                react_1.default.createElement("h2", { className: "text-xl font-semibold text-gray-900" }, "Login or sign up")),
            showEmailInput ? (react_1.default.createElement("div", { className: "space-y-4" },
                react_1.default.createElement("div", { className: "flex items-center border rounded-xl p-3 focus-within:ring-2 focus-within:ring-violet-500 transition-all" },
                    react_1.default.createElement(md_1.MdOutlineEmail, { className: "w-5 h-5 text-gray-400 mr-2" }),
                    react_1.default.createElement("input", { type: "email", placeholder: "your@email.com", value: email, onChange: (e) => setEmail(e.target.value), className: "flex-1 outline-none text-gray-800" })),
                react_1.default.createElement("button", { className: `${buttonColor} w-full text-white py-3 rounded-xl font-medium transition-colors`, onClick: () => onConnect('email') }, "Submit"))) : (react_1.default.createElement("div", { className: "space-y-3" },
                react_1.default.createElement("button", { onClick: () => setShowEmailInput(true), className: "w-full border rounded-xl p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-gray-700" },
                    react_1.default.createElement(md_1.MdOutlineEmail, { className: "w-5 h-5" }),
                    react_1.default.createElement("span", { className: "flex-1 text-left" }, "Continue with email")),
                react_1.default.createElement("button", { onClick: () => onConnect('google'), className: "w-full border rounded-xl p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-gray-700" },
                    react_1.default.createElement(fc_1.FcGoogle, { className: "w-5 h-5" }),
                    react_1.default.createElement("span", { className: "flex-1 text-left" }, "Continue with Google")),
                react_1.default.createElement("button", { onClick: () => onConnect('apple'), className: "w-full border rounded-xl p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-gray-700" },
                    react_1.default.createElement(fa_1.FaApple, { className: "w-5 h-5" }),
                    react_1.default.createElement("span", { className: "flex-1 text-left" }, "Continue with Apple")),
                react_1.default.createElement("button", { className: "w-full border rounded-xl p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-gray-700" },
                    react_1.default.createElement(hi_1.HiDotsHorizontal, { className: "w-5 h-5" }),
                    react_1.default.createElement("span", { className: "flex-1 text-left" }, "More options"),
                    react_1.default.createElement("span", { className: "text-gray-400" }, "\u203A")))),
            react_1.default.createElement("div", { className: "mt-6 text-center" },
                react_1.default.createElement("button", { className: "text-violet-600 hover:text-violet-700 text-sm font-medium" }, "I have a passkey")),
            react_1.default.createElement("div", { className: "mt-6 text-center text-xs text-gray-500" }, "Protected by Privy"))));
};
exports.LoginModal = LoginModal;
