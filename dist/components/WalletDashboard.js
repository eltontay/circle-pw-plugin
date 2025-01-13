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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletDashboard = void 0;
const react_1 = __importStar(require("react"));
const WalletDashboard = ({ walletState, onTransfer, onDisconnect, }) => {
    const [recipient, setRecipient] = (0, react_1.useState)('');
    const [amount, setAmount] = (0, react_1.useState)('');
    const handleTransfer = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            yield onTransfer(recipient, amount);
            setRecipient('');
            setAmount('');
        }
        catch (error) {
            console.error('Transfer failed:', error);
        }
    });
    return (react_1.default.createElement("div", { className: "p-6 border border-blue-500 rounded-lg max-w-[500px]" },
        react_1.default.createElement("h2", { className: "text-xl font-bold" }, "Your Wallet"),
        react_1.default.createElement("div", { className: "text-2xl font-bold my-4" },
            "Balance: ",
            walletState.balance,
            " USDC"),
        react_1.default.createElement("div", { className: "font-mono bg-gray-100 p-3 rounded-lg my-4" },
            "Address: ",
            walletState.address),
        react_1.default.createElement("form", { onSubmit: handleTransfer, className: "flex flex-col gap-3 mt-6" },
            react_1.default.createElement("input", { type: "text", placeholder: "Recipient Address", value: recipient, onChange: (e) => setRecipient(e.target.value), className: "p-3 border border-gray-300 rounded-lg" }),
            react_1.default.createElement("input", { type: "number", placeholder: "Amount (USDC)", value: amount, onChange: (e) => setAmount(e.target.value), className: "p-3 border border-gray-300 rounded-lg" }),
            react_1.default.createElement("button", { type: "submit", className: "bg-blue-500 text-white p-3 rounded-lg hover:opacity-90" }, "Transfer")),
        react_1.default.createElement("button", { onClick: onDisconnect, className: "w-full mt-4 bg-red-500 text-white p-3 rounded-lg hover:opacity-90" }, "Disconnect")));
};
exports.WalletDashboard = WalletDashboard;
