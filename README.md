# w3notary.app

**Status:** Ready for Development  
**Last Updated:** May 2025

## 📌 Core Principles

- **Decentralized First:** No single point of failure.
- **Privacy by Default:** ZK-proofs for minimal data exposure.
- **Multi-Chain Anchoring:** Ethereum (L2-first), Solana, Bitcoin.
- **Legally Compliant:** GDPR redaction, offline modes.

---

## 📦 Modular Architecture

### 🔷 Module 1: Multi-Chain Smart Contracts (Solidity Dev)
- **Tech:** Hardhat + Foundry, Solidity
- **Features:**
  - Bitcoin anchoring (OP_RETURN)
  - MultiChainNotarizer for ETH/SOL/BTC
  - Merkle batching, Solana PDA, OpenZeppelin standards

### 🔷 Module 2: ZK-Proofs & Privacy (Cryptography Engineer)
- **Tech:** Circom, SnarkJS, Semaphore
- **Features:**
  - GDPR hash redaction proofs
  - Bitcoin proof verification
  - WASM bindings for browsers/mobile

### 🔷 Module 3: Frontend + Mobile (Frontend Dev)
- **Tech:** Next.js, Tailwind, React Native
- **Features:**
  - Public verification portal
  - Airgap QR signing
  - Chain selection UI (Polygon default)
  - PDF templating (legal/DAO/academic)

### 🔷 Module 4: Backend API (Backend Dev)
- **Tech:** Express, Node.js, BullMQ
- **Features:**
  - Rate-limited endpoints
  - GDPR redaction webhook (IPFS/Arweave purge)
  - Swagger docs

### 🔷 Module 5: Storage & Identity (DevOps)
- **Tech:** IPFS, Arweave, Lit Protocol
- **Features:**
  - Pricing tiers for storage
  - Social recovery (3-of-5 MPC)
  - Storage cost benchmarking

### 🔷 Module 6: AI Agent SDK (Python/JS SDK Dev)
- **Tech:** TypeScript, Python
- **Timeline:** Q4 2025
- **Features:**
  - SDKs for agent integration
  - Agent signing for DAO proposals

### 🔷 Module 7: DevOps & Monitoring (DevOps)
- **Tech:** GitHub Actions, Sentry, Tenderly
- **Features:**
  - Contract verification bots
  - Slack alerts for IPFS failures
  - Load testing

### 🔷 Module 8: Tokenomics (Optional, Token Engineer)
- **Tech:** Solidity, Scaffold-ETH
- **Timeline:** Phase 3 (Q1 2026)
- **Features:**
  - Staking and DAO governance

---

## 🗓 Integrated Timeline

| Phase     | Focus                      | Modules                | Deliverables                        |
|-----------|----------------------------|------------------------|-------------------------------------|
| Week 1-2  | Core Flow (ETH L2 + IPFS)  | 1, 3, 4, 5             | Working E2E notarization MVP        |
| Week 3-4  | ZK + Multi-Chain           | 2, 1 (updates), 7      | GDPR redaction, Bitcoin support     |
| Week 5    | Mobile + Offline           | 3 (RN), 5 (MPC)        | Airgap signing, social recovery     |
| Q4 2025   | AI SDK & Scaling           | 6, 4 (batch API)       | Python/JS SDK, 1k+ batch processing |

---

## 🔗 Critical Dependencies

- **Module 1 → Module 2:** ABI ↔ ZK circuit inputs
- **Module 2 → Module 3:** WASM proofs in mobile
- **Module 5 → All:** Storage failovers (IPFS ↔ Arweave)

---

## 🚨 Risk Mitigation

| Risk                  | Solution                   | Owner            |
|-----------------------|---------------------------|------------------|
| ZK proof gen too slow | Fallback to server proofs  | Cryptography     |
| Bitcoin TX delays     | Use mempool accelerators   | Solidity Dev     |
| Mobile storage limits | Cap offline queue at 50MB  | Frontend Dev     |

---

## 🛠 Tech Stack Overview

- **Frontend:** Next.js, Tailwind, React Native
- **Backend:** Node.js, Express, BullMQ
- **Smart Contracts:** Solidity, Hardhat, Foundry
- **Privacy:** Circom, SnarkJS, Semaphore
- **Storage:** IPFS, Arweave, Lit Protocol
- **DevOps:** GitHub Actions, Sentry, Tenderly

---

## 👥 Contributors

- Solidity Dev
- Cryptography Engineer
- Frontend Dev
- Backend Dev
- DevOps Engineer
- Python/JS SDK Dev
- Token Engineer (optional)

---

## 📄 License

This project is licensed under the MIT License.

---

> _For detailed plans and architecture, see the “w3notary.app Final Project Plan.pdf” in the repo._
