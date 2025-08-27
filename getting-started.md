# Getting started

This guide helps you install and set up Cirrus Sync.


## System requirements

### Windows
- Windows 10 or later (64-bit)
- 4 GB RAM minimum (8 GB recommended)
- 500 MB free disk space
- Internet connection

### macOS
- macOS 10.15 (Catalina) or later
- 4 GB RAM minimum (8 GB recommended)
- 500 MB free disk space
- Internet connection

### Linux
- Ubuntu 18.04+ / CentOS 7+ / Fedora 30+
- 4 GB RAM minimum (8 GB recommended)
- 500 MB free disk space
- Internet connection

## Installation

### Windows installation

1. Download the installer from the official website
2. Run `CirrusSync-Setup.exe` as administrator
3. Follow the installation wizard
4. Launch Cirrus Sync from the Start menu

### macOS installation

1. Download the `.dmg` file from the official website
2. Double-click the downloaded file
3. Drag Cirrus Sync to the Applications folder
4. Launch from Applications or Spotlight

### Linux installation

#### Ubuntu/Debian
```bash
wget https://releases.cirrus-sync.com/linux/cirrus-sync.deb
sudo dpkg -i cirrus-sync.deb
sudo apt-get install -f
```

#### CentOS/RHEL/Fedora
```bash
wget https://releases.cirrus-sync.com/linux/cirrus-sync.rpm
sudo rpm -i cirrus-sync.rpm
```

## Initial setup

### Creating your account

1. Launch Cirrus Sync
2. Click "Create Account" on the welcome screen
3. Enter your email address and create a secure password
4. Verify your email address
5. Complete your profile setup

### Connecting cloud storage providers

Cirrus Sync supports multiple cloud storage providers:

- **Google Drive** - Full integration with Google Workspace
- **Dropbox** - Complete file synchronization
- **OneDrive** - Microsoft 365 integration
- **iCloud** - Apple ecosystem support
- **Amazon S3** - Enterprise storage solution

To connect a provider:

1. Go to Settings > Cloud Providers
2. Click "Add Provider"
3. Select your cloud storage service
4. Authorize Cirrus Sync to access your account
5. Choose sync folders and preferences

### Setting up your first sync

1. Click "New Sync" in the main interface
2. Choose your local folder
3. Select the cloud provider and remote folder
4. Configure sync options:
   - **Two-way sync** - Changes sync in both directions
   - **Upload only** - Local changes upload to cloud
   - **Download only** - Cloud changes download locally
5. Click "Start Sync"

## Next steps

- Read the [User Guide](user-guide.md) for detailed features
- Configure advanced settings in [Configuration](configuration.md)
- Check out [FAQ](faq.md) for common questions

## Troubleshooting installation

If you encounter issues during installation:

1. Ensure you meet the system requirements
2. Disable antivirus temporarily during installation
3. Run the installer as administrator (Windows)
4. Check the [Troubleshooting](troubleshooting.md) guide
5. Contact support if problems persist
