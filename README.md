# Okto AI agent example

A comprehensive integration plugin for ElizaOS that provides access to Okto's various APIs and services, enabling seamless Web3 interactions.

## Dependencies

- node v23.3.0
- elizaos v0.1.9

## Installation and run

```bash
pnpm install
pnpm start --character="./characters/okto.character.json"
```

## Features

- **Portfolio Management**: Retrieve user portfolio data and NFT balances.
- **Wallet Management**: Access user's wallets.
- **Token Information**: Get tokens list and details.
- **Chain Support**: Fetch supported blockchain networks.
- **NFT Collections & Order History**: Retrieve NFT collections and user order history.
- **Token Transfer**: Initiate token transfers.
- **NFT Transfer**: Initiate NFT transfers.
- **EVM Raw Transaction**: Execute raw Ethereum Virtual Machine (EVM) transactions.
- **Swap Transactions**: Execute EVM swap transactions

## Installation

```bash
npm install elizaos-okto-plugin
```

## Configuration

The plugin requires several environment variables to be set:

```env
# Okto specific settings
OKTO_ENVIRONMENT=                # Optional. Defaults to "sandbox". Options: sandbox, staging, production.
OKTO_VENDOR_PRIVATE_KEY=         # Required. Your vendor private key provided by Okto.
OKTO_VENDOR_SWA=                 # Required. Your vendor SWA provided by Okto.

# Google OAuth settings
GOOGLE_CLIENT_ID=                # Required. Get from https://console.cloud.google.com/
GOOGLE_CLIENT_SECRET=            # Required. Get from https://console.cloud.google.com/
```

## Setup Google OAuth

1. Go to https://console.cloud.google.com/
2. Create a new project.
3. Create OAuth credentials.
4. Retrieve the client ID and secret.
5. Set the redirect URL to http://localhost:5000 (or your desired endpoint).

## Usage

```typescript
import OktoPlugin from "elizaos-okto-plugin";

runtime.registerPlugin(OktoPlugin);
```

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## License

This plugin is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.