# User guide

Complete guide to using Cirrus Sync effectively.

## Dashboard overview

The Cirrus Sync dashboard provides a centralized view of all your sync operations:

- **Active Syncs** - Currently running synchronization tasks
- **Recent Activity** - Latest file changes and sync events
- **Storage Usage** - Cloud storage consumption across providers
- **Sync Status** - Health and performance metrics

## Managing sync folders

### Adding a new sync

1. Click the "+" button in the main toolbar
2. Select "New Sync Folder"
3. Choose your local directory
4. Select cloud provider and remote path
5. Configure sync preferences
6. Click "Create Sync"

### Sync types

**Real-time Sync**
- Instantly syncs changes as they occur
- Best for active working directories
- Higher battery usage on mobile devices

**Scheduled Sync**
- Syncs at specified intervals
- Efficient for large file collections
- Customizable timing options

**Manual Sync**
- Sync only when manually triggered
- Complete control over sync timing
- Ideal for sensitive data

### Sync filters

Configure which files to include or exclude:

**File Type Filters**
```
Include: *.docx, *.pdf, *.jpg
Exclude: *.tmp, *.cache, *.log
```

**Size Filters**
- Minimum file size: 1 KB
- Maximum file size: 100 MB
- Skip empty files option

**Date Filters**
- Modified after: specific date
- Created before: specific date
- Age-based rules

## File management

### File versioning

Cirrus Sync maintains version history for all synced files:

- **Auto-versioning** - Keeps last 10 versions automatically
- **Manual snapshots** - Create named versions manually
- **Version comparison** - View differences between versions
- **Restore options** - Rollback to any previous version

### Conflict resolution

When file conflicts occur, Cirrus Sync offers several resolution strategies:

**Automatic Resolution**
- Newest file wins
- Largest file wins
- Source priority (local vs. cloud)

**Manual Resolution**
- Review conflicts in dedicated interface
- Compare file contents side-by-side
- Choose resolution for each conflict
- Apply rules for future conflicts

### Offline access

Configure offline availability for important files:

1. Right-click any file or folder
2. Select "Make Available Offline"
3. Choose sync priority (High/Normal/Low)
4. Files download automatically when connected

## Security features

### Encryption

**In-Transit Encryption**
- TLS 1.3 for all data transfers
- End-to-end encryption support
- Certificate pinning for enhanced security

**At-Rest Encryption**
- AES-256 encryption for local cache
- Optional client-side encryption
- Key management integration

### Access controls

**Two-Factor Authentication**
- TOTP support (Google Authenticator, Authy)
- SMS backup options
- Recovery codes generation

**Device Management**
- View all connected devices
- Remote device deauthorization
- Device-specific access controls

## Sharing and collaboration

### Share links

Create secure links to share files with others:

1. Right-click any synced file
2. Select "Create Share Link"
3. Configure permissions:
   - View only
   - Download allowed
   - Comment access
   - Edit permissions
4. Set expiration date
5. Copy and share the link

### Team folders

Collaborate with team members using shared folders:

- **Team creation** - Invite members by email
- **Role management** - Admin, Editor, Viewer roles
- **Activity tracking** - See who changed what and when
- **Notification settings** - email alerts for changes

## Performance optimization

### Bandwidth management

Control how Cirrus Sync uses your internet connection:

**Upload Limits**
- Maximum upload speed: 1 Mbps
- Upload schedule: Business hours only
- Pause uploads when on cellular

**Download Limits**
- Maximum download speed: 5 Mbps
- Priority downloads for recently accessed files
- Background download throttling

### Storage optimization

**Smart Sync**
- Keep frequently accessed files local
- Move old files to cloud-only storage
- Automatic cleanup of temporary files

**Cache Management**
- Local cache size limit: 10 GB
- Cache cleanup policies
- Manual cache clearing options

## Mobile apps

Cirrus Sync offers native mobile applications:

### iOS app features
- Full file access and editing
- Camera upload automation
- Touch ID/Face ID authentication
- Offline file access

### Android app features
- Intent integration with other apps
- Fingerprint authentication
- Background sync optimization
- SD card support

## Browser extension

The Cirrus Sync browser extension provides:

- One-click file saving to cloud
- Screenshot capture and sync
- Web page archiving
- Password-protected downloads

## Keyboard shortcuts

**Windows/Linux**
- `Ctrl + N` - New sync folder
- `Ctrl + R` - Refresh all syncs
- `Ctrl + P` - Pause all syncs
- `Ctrl + ,` - Open preferences

**macOS**
- `Cmd + N` - New sync folder
- `Cmd + R` - Refresh all syncs
- `Cmd + P` - Pause all syncs
- `Cmd + ,` - Open preferences
