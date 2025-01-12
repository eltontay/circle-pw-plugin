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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletDashboard = void 0;
var react_1 = require("react");
var WalletDashboard = function (_a) {
    var walletState = _a.walletState, onTransfer = _a.onTransfer, onDisconnect = _a.onDisconnect;
    var _b = (0, react_1.useState)(''), recipient = _b[0], setRecipient = _b[1];
    var _c = (0, react_1.useState)(''), amount = _c[0], setAmount = _c[1];
    var handleTransfer = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, onTransfer(recipient, amount)];
                case 2:
                    _a.sent();
                    setRecipient('');
                    setAmount('');
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Transfer failed:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
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
            react_1.default.createElement("input", { type: "text", placeholder: "Recipient Address", value: recipient, onChange: function (e) { return setRecipient(e.target.value); }, className: "p-3 border border-gray-300 rounded-lg" }),
            react_1.default.createElement("input", { type: "number", placeholder: "Amount (USDC)", value: amount, onChange: function (e) { return setAmount(e.target.value); }, className: "p-3 border border-gray-300 rounded-lg" }),
            react_1.default.createElement("button", { type: "submit", className: "bg-blue-500 text-white p-3 rounded-lg hover:opacity-90" }, "Transfer")),
        react_1.default.createElement("button", { onClick: onDisconnect, className: "w-full mt-4 bg-red-500 text-white p-3 rounded-lg hover:opacity-90" }, "Disconnect")));
};
exports.WalletDashboard = WalletDashboard;
