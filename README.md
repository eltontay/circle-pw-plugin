# Circle Programmable Wallet Plugin (Beta)

> ⚠️ **Beta Notice**: This plugin is currently in testing and not yet available for production use. Local development and linking is required for integration.

A plugin that provides out-of-the-box user interface components for Circle's Programmable Wallet infrastructure. Simplify your user onboarding with pre-built authentication flows and wallet management interfaces.

## What's Included
- 🎨 Ready-to-use React UI components
- 🔑 Pre-built authentication flows
- 👤 User onboarding screens
- 💼 Wallet management interface
- 🛠️ TypeScript support
- 📱 Responsive design

## Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)

## Current Limitations
- ⚠️ This plugin is in beta and for testing purposes only
- ⚠️ Only local development linking is supported
- ⚠️ Not yet available via npm install

## Development Setup

### In Plugin Directory

1. Clone the repository `git clone https://github.com/eltontay/circle-pw-sdk.git`
2. Run `cd circle-pw-sdk && npm install` to install the dependencies
3. Run `npm run build` to build the plugin
3. Run `npm link` to link the plugin

### In Test Wallet App Directory

4. Run `cd test-wallet-app && npm link circle-pw-sdk && npm install` to link the plugin to your project
5. Run `npm run start` to start the application in your project