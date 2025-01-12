"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectButton = void 0;
var react_1 = require("react");
var LoginModal_1 = require("./LoginModal");
var ConnectButton = function (_a) {
    var onConnect = _a.onConnect, enabledMethods = _a.enabledMethods;
    var _b = (0, react_1.useState)(false), showModal = _b[0], setShowModal = _b[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { className: "bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600", onClick: function () { return setShowModal(true); } }, "Connect Wallet"),
        showModal && (react_1.default.createElement(LoginModal_1.LoginModal, { onClose: function () { return setShowModal(false); }, onConnect: onConnect, enabledMethods: enabledMethods }))));
};
exports.ConnectButton = ConnectButton;
