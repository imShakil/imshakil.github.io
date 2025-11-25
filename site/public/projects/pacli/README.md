# pacli - Secrets Management CLI

## Overview

pacli is a modern, local-first command-line tool for secure secrets management. Designed with security and usability in mind, it provides a lightweight alternative to cloud-based secret managers while maintaining enterprise-grade encryption standards.

## Key Features

### 🔐 Master Password Protection
- Single master password for all secrets
- Secure password derivation using industry-standard algorithms
- Optional biometric authentication support

### 🔑 Multiple Secret Types
- **Passwords**: Standard password storage
- **API Keys**: Secure API credential management
- **SSH Keys**: Private key storage and management
- **Tokens**: OAuth and authentication tokens
- **Custom Secrets**: Flexible key-value storage

### 🔗 URL Shortening
- Built-in URL shortening for long credentials
- QR code generation for easy sharing
- Expiring links for temporary access

### 🔓 SSH Key Authentication
- SSH key-based authentication
- Passwordless access to secrets
- Key rotation support

### 💾 Local-First Architecture
- All data stored locally on your machine
- No cloud dependencies
- Full control over your secrets
- Offline access capability

## Security Features

### Encryption
- AES-256 encryption for all stored secrets
- PBKDF2 key derivation
- Secure random salt generation
- Encrypted database storage

### Access Control
- Master password protection
- Session timeout
- Secure memory handling
- Audit logging

### Best Practices
- No plaintext storage
- Secure deletion of sensitive data
- Regular security updates
- Vulnerability scanning

## Installation

```bash
# Using npm
npm install -g pacli

# Using yarn
yarn global add pacli

# From source
git clone https://github.com/imshakil/pacli.git
cd pacli
npm install
npm run build
```

## Quick Start

```bash
# Initialize pacli
pacli init

# Add a new password
pacli add password github-token

# Add an API key
pacli add api-key stripe-key

# Add an SSH key
pacli add ssh-key production-server

# List all secrets
pacli list

# Retrieve a secret
pacli get github-token

# Delete a secret
pacli delete github-token

# Generate a strong password
pacli generate --length 32
```

## Use Cases

### Development
- Store API keys and tokens
- Manage database credentials
- SSH key management

### DevOps
- Secure credential storage for automation
- CI/CD pipeline secret management
- Infrastructure access credentials

### Security
- Personal password management
- Sensitive data protection
- Compliance with security standards

## Architecture

```
┌─────────────────────────────────┐
│   CLI Interface                 │
├─────────────────────────────────┤
│   Command Parser & Handler      │
├─────────────────────────────────┤
│   Encryption Engine             │
├─────────────────────────────────┤
│   Local Database (SQLite)       │
└─────────────────────────────────┘
```

## Technology Stack

- **Language**: TypeScript/JavaScript
- **CLI Framework**: Commander.js
- **Encryption**: crypto-js, libsodium
- **Database**: SQLite
- **Authentication**: bcrypt, argon2

## Configuration

pacli stores configuration in `~/.pacli/config.json`:

```json
{
  "encryptionAlgorithm": "aes-256-gcm",
  "sessionTimeout": 3600,
  "autoLock": true,
  "backupEnabled": true,
  "backupPath": "~/.pacli/backups"
}
```

## Advanced Features

### Backup & Recovery
- Automatic encrypted backups
- Manual backup creation
- Secure recovery process

### Import/Export
- Import from other password managers
- Export in encrypted format
- Batch operations

### Sync (Optional)
- Optional cloud sync with end-to-end encryption
- Multi-device support
- Conflict resolution

## Security Considerations

⚠️ **Important**: 
- Never share your master password
- Keep your system updated
- Use strong master passwords
- Enable automatic backups
- Regularly audit your secrets

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## Roadmap

- [ ] Web UI dashboard
- [ ] Mobile app support
- [ ] Hardware security key integration
- [ ] Advanced audit logging
- [ ] Team collaboration features
- [ ] Kubernetes integration

## License

MIT License - See LICENSE file for details

---

**Status**: Open Source  
**Year**: 2025  
**Category**: Security & Tools  
**Language**: TypeScript
