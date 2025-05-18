# w3notary.app

**Status:** Ready for Development  
**Last Updated:** May 2025

## Project Overview

w3notary is a modular, decentralized notarization platform that supports multi-chain anchoring (Ethereum, Solana, Bitcoin), privacy-first data handling (with ZK-proofs), and GDPR-compliant workflows. The system is designed for legal, academic, and DAO credentialing, and prioritizes security, compliance, and future scalability.

## Core Principles

- Decentralized architecture—no single point of failure
- Privacy by default (ZK-proofs, minimum data exposure)
- Multi-chain anchoring (Ethereum L2-first, Solana, Bitcoin)
- Legal and regulatory compliance (GDPR, offline modes)

## Modular Architecture

1. **Multi-Chain Smart Contracts**  
   - Hardhat/Foundry (Solidity). Supports ETH, SOL, BTC.  
   - Features: Merkle batching, Solana PDA, Bitcoin OP_RETURN anchoring

2. **ZK-Proofs & Privacy**  
   - Circom, SnarkJS, Semaphore  
   - Features: GDPR-compliant deletion, proof of Bitcoin anchoring, WASM bindings

3. **Frontend and Mobile Clients**  
   - Next.js, Tailwind, React Native  
   - Features: Verification portal, airgap QR signing, chain selection UI, PDF templating

4. **Backend API**  
   - Express (Node.js), BullMQ  
   - Features: Notarization and verification endpoints, GDPR redaction, batch processing, Swagger docs

5. **Storage & Identity**  
   - IPFS, Arweave, Lit Protocol  
   - Features: Storage pricing logic, social recovery (MPC), storage benchmarking, auto-deletion (GDPR)

6. **AI Agent SDKs**  
   - TypeScript, Python  
   - Features: SDKs for automation and DAO agent integration (Phase 2)

7. **DevOps & Monitoring**  
   - GitHub Actions, Sentry, Tenderly  
   - Features: Contract verification, load testing, Slack alerts

8. **Tokenomics (Future/Optional)**  
   - Solidity, Scaffold-ETH  
   - Features: Staking, DAO governance (Phase 3)

## Project Roadmap (2025–2026)

| Phase       | Focus                             | Modules                 | Deliverables                        |
|------------ |-----------------------------------|-------------------------|-------------------------------------|
| Weeks 1-2   | Core E2E Flow (ETH L2 + IPFS)     | 1, 3, 4, 5              | Notarization MVP                    |
| Weeks 3-4   | ZK & Multi-Chain                  | 2, 1 (updates), 7       | GDPR redaction, Bitcoin support     |
| Week 5      | Mobile & Offline Features         | 3 (mobile), 5 (MPC)     | Airgap signing, social recovery     |
| Q4 2025     | AI Agent SDK & Scaling            | 6, 4 (batch API)        | JS/Python SDK, batch processing     |
| Q1 2026     | Tokenomics, DAO                   | 8                       | Staking, governance features        |

## Critical Dependencies

- Contract ABI matches ZK circuit inputs (Modules 1/2)
- WASM proof generation available for browser/mobile (Module 2/3)
- Storage failovers do not impact UX (Module 5/all)

## Risk Mitigation

| Risk                   | Solution                       | Owner/Module           |
|------------------------|-------------------------------|------------------------|
| Slow ZK proof gen      | Fallback to server-side proofs | Cryptography/Privacy   |
| Bitcoin TX delays      | Use mempool accelerators       | Smart Contracts        |
| Mobile storage limits  | Limit offline queue size       | Frontend/Mobile        |

## Technology Stack

- Frontend: Next.js, Tailwind, React Native
- Backend: Node.js, Express, BullMQ
- Smart Contracts: Solidity, Hardhat, Foundry
- Privacy: Circom, SnarkJS, Semaphore
- Storage: IPFS, Arweave, Lit Protocol
- DevOps: GitHub Actions, Sentry, Tenderly

## Contributors

- Solidity Developer
- Cryptography Engineer
- Frontend Developer
- Backend Developer
- DevOps Engineer
- Python/JS SDK Developer
- Token Engineer (Phase 3)

## License

MIT License

*For technical details and the most up-to-date plans, see `w3notary.app Final Project Plan.pdf` in the repository.*
