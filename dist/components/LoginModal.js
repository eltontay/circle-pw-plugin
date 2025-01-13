"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModal = void 0;
const react_1 = __importDefault(require("react"));
const LoginModal = ({ onClose, onConnect, enabledMethods, }) => {
    const handleConnect = (method) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield onConnect(method);
            onClose();
        }
        catch (error) {
            console.error('Failed to connect:', error);
        }
    });
    return (react_1.default.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50", onClick: onClose },
        react_1.default.createElement("div", { className: "bg-white p-6 rounded-lg w-[400px] max-w-[90%]", onClick: e => e.stopPropagation() },
            react_1.default.createElement("h2", { className: "text-xl font-bold mb-4" }, "Connect Your Wallet"),
            enabledMethods.map(method => (react_1.default.createElement("button", { key: method, onClick: () => handleConnect(method), className: "w-full py-3 px-4 mb-2 border border-blue-500 rounded-lg hover:bg-blue-50 flex items-center justify-center gap-2" }, method.charAt(0).toUpperCase() + method.slice(1)))))));
};
exports.LoginModal = LoginModal;
