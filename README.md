# @okto_web3/eliza-plugin Example 

A comprehensive integration plugin for ElizaOS that provides access to Okto's various APIs and services, enabling seamless Web3 interactions.

## Dependencies

- Node.js v23+
- pnpm 
- Okto account
- LLM model provider (e.g. OpenAI, Anthropic, etc.)

## How to run this Sample agent
```
git clone https://github.com/okto-hq/okto-eliza-ai-agent-example
cd okto-eliza-ai-agent-example
pnpm install
pnpm run start
```

## How to modify this Sample agent 
- currently this sample agent is using Groq as the LLM model provider.
- you can modify the `characters/okto.character.json` file to use different LLM model provider.
```
characters/okto.character.json
```

## Update 

## Features

- **Portfolio Management**: 
  - Get user portfolio data and balances
  - View NFT portfolio details
  - Track token holdings across multiple networks

- **Wallet Management**: 
  - Access user's wallets
  - View wallet addresses and network details

- **Token Operations**:
  - Get supported tokens list and details
  - Transfer tokens between addresses
  - Swap tokens using DEX integrations
  - Execute EVM raw transactions

- **NFT Operations**:
  - View NFT collections
  - Transfer NFTs (ERC721/ERC1155)
  - Track NFT balances

- **Chain Support**: 
  - Multiple networks supported including:
    - Ethereum
    - Polygon
    - Optimism
    - Arbitrum
    - Base
    - Linea
    - BSC
    - Avalanche
    - Solana
    - Aptos

- **Transaction History**: View detailed order history across networks

## Installation

```bash
npm install @okto_web3/eliza-plugin
```

## Configuration

The plugin requires several environment variables to be set:

```env
# Okto specific settings
OKTO_ENVIRONMENT=                # Optional. Defaults to "sandbox". Options: sandbox, staging, production.
OKTO_CLIENT_PRIVATE_KEY=         # Required. Your client private key provided by Okto.
OKTO_CLIENT_SWA=                 # Required. Your client SWA provided by Okto.

# Google OAuth settings
GOOGLE_CLIENT_ID=                # Required. Get from https://console.cloud.google.com/
GOOGLE_CLIENT_SECRET=            # Required. Get from https://console.cloud.google.com/
```

Note: You also need to set the environment variable for the LLM you want to use.

## Setup Google OAuth

1. Go to https://console.cloud.google.com/
2. Create a new project
3. Create OAuth credentials
4. Add authorized redirect URI: http://localhost:5000
5. Get the client ID and secret
6. Set them in your environment variables

## Usage

```typescript
import {OktoPlugin} from "@okto_web3/eliza-plugin";
const oktoPlugin = new OktoPlugin()
  return new AgentRuntime({
    databaseAdapter: db,
    token,
    modelProvider: character.modelProvider,
    evaluators: [],
    character,
    plugins: [
      bootstrapPlugin,
      nodePlugin,
      oktoPlugin,
    ].filter(Boolean),
    providers: [],
    actions: [],
    services: [oktoPlugin.oktoService],
    managers: [],
    cacheManager: cache,
  });
```

### Available Actions

- `OKTO_GET_PORTFOLIO` - Get user's token portfolio
- `OKTO_GET_ACCOUNT` - Get user's wallet accounts
- `OKTO_GET_CHAINS` - Get supported blockchain networks
- `OKTO_GET_NFT_COLLECTIONS` - Get user's NFT collections
- `OKTO_GET_ORDERS_HISTORY` - Get transaction history
- `OKTO_GET_PORTFOLIO_NFT` - Get NFT portfolio
- `OKTO_GET_TOKENS` - Get supported tokens
- `OKTO_TRANSFER` - Transfer tokens
- `OKTO_NFT_TRANSFER` - Transfer NFTs
- `OKTO_SWAP` - Swap tokens using DEX

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## License

This plugin is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.