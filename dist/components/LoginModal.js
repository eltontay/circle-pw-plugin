"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModal = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const Google_1 = __importDefault(require("@mui/icons-material/Google"));
const Apple_1 = __importDefault(require("@mui/icons-material/Apple"));
const Email_1 = __importDefault(require("@mui/icons-material/Email"));
const MoreHoriz_1 = __importDefault(require("@mui/icons-material/MoreHoriz"));
const Key_1 = __importDefault(require("@mui/icons-material/Key"));
const StyledButton = (0, styles_1.styled)(material_1.Button)(({ theme }) => ({
    justifyContent: 'flex-start',
    padding: '12px 16px',
    borderRadius: 12,
    textTransform: 'none',
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
        backgroundColor: theme.palette.grey[50],
        borderColor: theme.palette.divider,
    }
}));
const LoginModal = (props) => {
    const [email, setEmail] = react_1.default.useState('');
    const [showEmailInput, setShowEmailInput] = react_1.default.useState(false);
    const { onClose, onConnect } = props;
    return (react_1.default.createElement(material_1.Dialog, { open: true, onClose: onClose, maxWidth: "xs", fullWidth: true, PaperProps: {
            sx: {
                borderRadius: 3,
                boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
            }
        } },
        react_1.default.createElement(material_1.DialogTitle, { sx: { pb: 1 } },
            react_1.default.createElement(material_1.Stack, { direction: "row", alignItems: "center", justifyContent: "space-between" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(material_1.Typography, { variant: "h6", fontWeight: 600 }, "Welcome"),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, "Choose how you'd like to connect")),
                react_1.default.createElement(material_1.IconButton, { onClick: onClose, size: "small" },
                    react_1.default.createElement(Close_1.default, null)))),
        react_1.default.createElement(material_1.DialogContent, { sx: { pt: '8px !important' } },
            react_1.default.createElement(material_1.Stack, { spacing: 2 }, showEmailInput ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(material_1.TextField, { fullWidth: true, label: "Email address", variant: "outlined", value: email, onChange: (e) => setEmail(e.target.value), InputProps: {
                        startAdornment: react_1.default.createElement(Email_1.default, { color: "action", sx: { mr: 1 } })
                    } }),
                react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", size: "large", onClick: () => onConnect('email'), sx: {
                        borderRadius: 3,
                        textTransform: 'none',
                        py: 1.5
                    } }, "Continue with Email"),
                react_1.default.createElement(material_1.Button, { variant: "text", onClick: () => setShowEmailInput(false), sx: { textTransform: 'none' } }, "\u2190 Back to all options"))) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(StyledButton, { fullWidth: true, variant: "outlined", startIcon: react_1.default.createElement(Email_1.default, null), onClick: () => setShowEmailInput(true) }, "Continue with Email"),
                react_1.default.createElement(StyledButton, { fullWidth: true, variant: "outlined", startIcon: react_1.default.createElement(Google_1.default, null), onClick: () => onConnect('google') }, "Continue with Google"),
                react_1.default.createElement(StyledButton, { fullWidth: true, variant: "outlined", startIcon: react_1.default.createElement(Apple_1.default, null), onClick: () => onConnect('apple') }, "Continue with Apple"),
                react_1.default.createElement(StyledButton, { fullWidth: true, variant: "outlined", startIcon: react_1.default.createElement(MoreHoriz_1.default, null), endIcon: react_1.default.createElement(material_1.Typography, { color: "text.secondary" }, "\u203A") }, "More Options")))),
            react_1.default.createElement(material_1.Divider, { sx: { my: 3 } }),
            react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "text", startIcon: react_1.default.createElement(Key_1.default, null), sx: { textTransform: 'none' } }, "I have a passkey"))));
};
exports.LoginModal = LoginModal;
