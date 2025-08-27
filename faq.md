# FAQ

Frequently asked questions about Cirrus Sync.

## General questions

### What is Cirrus Sync?

Cirrus Sync is a cross-platform file synchronization application that keeps your files in sync across multiple devices and cloud storage providers. It supports real-time synchronization, conflict resolution, and works with popular cloud services like Google Drive, Dropbox, OneDrive, and iCloud.

### How much does Cirrus Sync cost?

Cirrus Sync offers three pricing tiers:

- **Free** - Up to 5 GB sync, 2 cloud providers, basic support
- **Premium** - $9.99/month - Unlimited sync, all providers, priority support
- **Enterprise** - $24.99/user/month - Advanced features, SSO, dedicated support

### Is Cirrus Sync secure?

Yes, Cirrus Sync implements multiple security layers:

- TLS 1.3 encryption for data in transit
- AES-256 encryption for local cache
- Optional client-side encryption
- Two-factor authentication support
- Regular security audits

### Which cloud providers are supported?

Cirrus Sync supports:
- Google Drive (including Google Workspace)
- Dropbox (Personal and Business)
- Microsoft OneDrive (Personal and Business)
- Apple iCloud
- Amazon S3
- Box
- pCloud
- MEGA

## Installation and setup

### What are the system requirements?

**Minimum Requirements:**
- Windows 10, macOS 10.15, or Linux (Ubuntu 18.04+)
- 4 GB RAM
- 500 MB disk space
- Internet connection

**Recommended:**
- 8 GB RAM or more
- SSD storage
- Stable broadband connection

### Can I use Cirrus Sync on multiple devices?

Yes, your Cirrus Sync account can be used on up to 10 devices with a Premium subscription. Free accounts are limited to 3 devices. Each device maintains its own sync configurations while sharing the same account credentials.

### How do I transfer my settings to a new computer?

1. Export settings from the old computer: Settings > Advanced > Export Configuration
2. Install Cirrus Sync on the new computer
3. Import settings: Settings > Advanced > Import Configuration
4. Re-authenticate cloud providers if needed

## Synchronization

### How does real-time sync work?

Real-time sync monitors your local folders for changes using file system events. When a file is modified, created, or deleted, Cirrus Sync immediately starts the synchronization process. This typically takes 1-5 seconds depending on file size and network speed.

### What happens if I modify the same file on two devices?

Cirrus Sync detects conflicts and offers several resolution options:

1. **Manual resolution** - Review and choose which version to keep
2. **Automatic rules** - Newest file wins, largest file wins, etc.
3. **Keep both** - Rename one version to preserve both files

### Can I sync files larger than 100 MB?

Yes, Cirrus Sync supports files up to 50 GB in size. Large files are transferred using chunked uploads for reliability. The actual size limit may depend on your cloud provider's restrictions.

### Why are some files not syncing?

Common reasons files don't sync:

1. **File in use** - Another application has the file locked
2. **Permissions** - Insufficient permissions to read/write the file
3. **Filters** - File type excluded by sync filters
4. **Size limits** - File exceeds maximum size settings
5. **Storage quota** - Cloud provider storage full
6. **Network issues** - Temporary connectivity problems

Check the sync status panel for specific error messages.

### How can I exclude certain files from syncing?

Configure sync filters in each sync folder's settings:

1. Right-click sync folder > Settings > Filters
2. Add patterns to exclude:
   - `*.tmp` - Exclude temporary files
   - `node_modules/` - Exclude specific folders
   - `*.log` - Exclude log files
3. Use include patterns to sync only specific file types
4. Test filters with the preview option

## Performance and storage

### How much bandwidth does Cirrus Sync use?

Bandwidth usage depends on:
- Number and size of files being synced
- Sync frequency settings
- Whether compression is enabled
- Network connection quality

You can limit bandwidth usage in Settings > Network > Bandwidth Controls.

### Does Cirrus Sync work offline?

Cirrus Sync requires an internet connection for synchronization. However, it offers offline features:

- **Offline access** - Mark files for offline availability
- **Local cache** - Recently accessed files remain available
- **Queue operations** - Changes are queued and sync when online
- **Conflict detection** - Handles changes made while offline

### How much local storage does Cirrus Sync use?

Storage usage includes:
- **Application files** - ~200 MB
- **Local cache** - Configurable (default 5 GB)
- **Sync folders** - Size of synchronized files
- **Metadata database** - Usually under 100 MB

Use Smart Sync to reduce local storage by keeping files in the cloud only.

## Troubleshooting

### Cirrus Sync won't start after installation

Try these solutions:

1. **Windows**: Run as Administrator, install Visual C++ Redistributable
2. **macOS**: Grant Full Disk Access in Security & Privacy settings
3. **Linux**: Install required dependencies (see installation guide)
4. Check antivirus software isn't blocking the application
5. Restart your computer

### Sync is very slow

Optimize sync performance:

1. **Check network connection** - Run speed test
2. **Adjust bandwidth limits** - Increase if too restrictive
3. **Enable compression** - Reduces transfer size
4. **Reduce concurrent transfers** - Lower CPU usage
5. **Use wired connection** - More stable than Wi-Fi
6. **Sync during off-peak hours** - Less network congestion

### I'm getting authentication errors

Resolve authentication issues:

1. **Re-enter credentials** - Password may have changed
2. **Clear application cache** - Remove corrupted auth tokens
3. **Check account status** - Ensure account isn't suspended
4. **Verify 2FA codes** - Use current time-based codes
5. **Reset API permissions** - Revoke and re-grant provider access

## Advanced features

### What is Smart Sync?

Smart Sync automatically manages local storage by:
- Keeping frequently accessed files local
- Moving old files to cloud-only storage
- Downloading files on-demand when accessed
- Freeing up disk space automatically

### Can I use Cirrus Sync for backup?

While Cirrus Sync is primarily a sync tool, it can serve as a backup solution:
- **Version history** - Keeps multiple file versions
- **One-way sync** - Upload-only mode for backup
- **Scheduled sync** - Automatic backup at set times
- **Multiple destinations** - Backup to multiple cloud providers

For critical data, consider dedicated backup solutions alongside Cirrus Sync.

### Does Cirrus Sync support team collaboration?

Yes, Cirrus Sync offers collaboration features:
- **Shared folders** - Team access to common files
- **Permission management** - Control who can edit/view
- **Activity tracking** - See who changed what
- **Comment integration** - Leave notes on files
- **Real-time collaboration** - Multiple users editing simultaneously

## Security and privacy

### Where is my data stored?

Your data is stored in:
1. **Your chosen cloud providers** - According to their data policies
2. **Local devices** - Encrypted cache and sync folders
3. **Cirrus Sync servers** - Only metadata and sync states (encrypted)

Cirrus Sync never stores your actual file content on our servers.

### Can Cirrus Sync employees access my files?

No, Cirrus Sync employees cannot access your files because:
- Files are stored on your chosen cloud providers
- Local encryption protects cached data
- Only encrypted metadata passes through our servers
- Client-side encryption is available for additional security

### What happens if I cancel my subscription?

If you cancel your subscription:
- **Sync stops** after the billing period ends
- **Local files remain** on your devices
- **Cloud files remain** in your provider accounts
- **Account data** is retained for 90 days for reactivation
- **Free tier features** remain available

## Billing and account

### How do I upgrade or downgrade my plan?

1. Log in to your Cirrus Sync account
2. Go to Settings > Subscription
3. Choose new plan and confirm
4. Billing changes take effect immediately
5. Prorated charges/credits applied automatically

### Can I get a refund?

Cirrus Sync offers a 30-day money-back guarantee for new subscribers. Contact support with your account details to request a refund within 30 days of initial purchase.

### How do I delete my account?

To permanently delete your account:
1. Cancel active subscriptions
2. Export any data you want to keep
3. Contact support to request account deletion
4. Account and associated data will be permanently removed within 30 days

## Getting support

### How do I contact support?

Support options based on your plan:

**Free Users:**
- Documentation and FAQ
- Community forum
- Email support (48-72 hour response)

**Premium Users:**
- All free options
- Priority email support (24 hour response)
- Live chat during business hours

**Enterprise Users:**
- All premium options
- Phone support
- Dedicated account manager
- 4-hour response time SLA

### What information should I include in support requests?

For faster resolution, include:
- Cirrus Sync version number
- Operating system and version
- Detailed description of the issue
- Steps to reproduce the problem
- Error messages or codes
- Screenshots if relevant

Support can provide log collection instructions if needed.
