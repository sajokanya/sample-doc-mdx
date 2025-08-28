# Troubleshooting

Common issues and solutions for Cirrus Sync.

## Installation issues

This section describes the most common installation problems you might encounter.

### Windows installation problems

**Problem:** Installation fails with "Access Denied" error
**Solution:**
1. Run the installer as Administrator
2. Temporarily disable antivirus software
3. Check Windows Defender exclusions
4. Ensure sufficient disk space (500 MB minimum)

**Problem:** Application won't start after installation
**Solution:**
1. Check Windows Event Viewer for error details
2. Install Microsoft Visual C++ Redistributable
3. Update Windows to latest version
4. Run Windows System File Checker: `sfc /scannow`

### macOS installation problems

**Problem:** "Cirrus Sync is damaged and can't be opened"
**Solution:**
1. Download fresh installer from official website
2. Allow installation from identified developers:
   ```bash
   sudo spctl --master-disable
   ```
3. After installation, re-enable Gatekeeper:
   ```bash
   sudo spctl --master-enable
   ```

**Problem:** Permission denied errors
**Solution:**
1. Grant Full Disk Access in System Preferences > Security & Privacy
2. Add Cirrus Sync to accessibility permissions
3. Reset permissions: `sudo chmod -R 755 /Applications/Cirrus\ Sync.app`

### Linux installation problems

**Problem:** Missing dependencies
**Solution:**
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install libgtk-3-0 libnotify4 libnss3 libxss1

# CentOS/RHEL
sudo yum install gtk3 libnotify nss libXScrnSaver

# Fedora
sudo dnf install gtk3 libnotify nss libXScrnSaver
```

**Problem:** AppImage won't execute
**Solution:**
```bash
chmod +x CirrusSync.AppImage
./CirrusSync.AppImage
```

## Sync issues

### Files not syncing

**Common Causes:**
1. Network connectivity issues
2. Cloud provider quota exceeded
3. File permissions problems
4. Sync filters blocking files
5. Conflict resolution pending

**Diagnostic Steps:**
1. Check sync status in main dashboard
2. Review sync logs: Menu > Help > View Logs
3. Verify internet connection
4. Check cloud provider storage quota
5. Review file permissions on local files

**Solutions:**
1. Restart sync: Right-click sync > Restart
2. Clear local cache: Settings > Advanced > Clear Cache
3. Re-authenticate provider: Settings > Providers > Reconnect
4. Check sync filters: Sync Settings > Filters
5. Resolve pending conflicts: Conflicts tab

### Slow sync performance

**Problem:** Sync taking too long
**Solutions:**
1. Adjust bandwidth limits: Settings > Network > Bandwidth
2. Reduce concurrent transfers: Settings > Performance > Max Transfers
3. Enable compression: Settings > Performance > Use Compression
4. Check network latency: `ping api.cloudsync-pro.com`
5. Close unnecessary applications using bandwidth

**Optimization Tips:**
- Sync during off-peak hours
- Use wired connection instead of Wi-Fi
- Exclude large media files from real-time sync
- Enable smart sync for infrequently accessed files

### Sync conflicts

**Problem:** Multiple conflict files created
**Resolution Process:**
1. Open Conflicts panel from main dashboard
2. Review conflicted files list
3. Choose resolution method:
   - Keep both versions (rename)
   - Keep local version
   - Keep remote version
   - Manual merge (for text files)
4. Apply resolution to all similar conflicts
5. Set automatic resolution rules for future

**Prevention:**
- Use file locking when editing important documents
- Communicate with team members about shared files
- Enable real-time sync for active projects
- Use version control for code repositories

## Authentication issues

### Login problems

**Problem:** Can't log in to account
**Solutions:**
1. Verify email and password
2. Check internet connection
3. Reset password via website
4. Clear application cache
5. Check for service status updates

**Problem:** Two-factor authentication not working
**Solutions:**
1. Verify correct time on device
2. Use backup codes if available
3. Regenerate 2FA codes in account settings
4. Contact support for account recovery

### Provider authentication

**Problem:** Cloud provider connection fails
**Solutions:**
1. Re-authorize provider in settings
2. Check provider account status
3. Verify OAuth permissions
4. Clear browser cache and cookies
5. Try different browser for authorization

**Common Provider Issues:**

**Google Drive:**
- Enable Google Drive API
- Check OAuth consent screen settings
- Verify account has sufficient permissions

**Dropbox:**
- Check app permissions in Dropbox settings
- Ensure account isn't suspended
- Verify API quota not exceeded

**OneDrive:**
- Check Microsoft account status
- Verify subscription includes OneDrive
- Clear Microsoft Edge cache

## Network and connectivity

### Connection problems

**Problem:** Cannot connect to Cirrus Sync servers
**Diagnostic Commands:**
```bash
# Test connectivity
ping api.cloudsync-pro.com
nslookup api.cloudsync-pro.com
curl -I https://api.cloudsync-pro.com/health

# Check ports
telnet api.cloudsync-pro.com 443
telnet api.cloudsync-pro.com 80
```

**Solutions:**
1. Check firewall settings
2. Configure proxy if required
3. Add Cirrus Sync to antivirus exclusions
4. Verify DNS settings
5. Contact network administrator

### Firewall configuration

**Required Outbound Ports:**
- Port 443 (HTTPS) - Primary API communication
- Port 80 (HTTP) - Fallback and redirects
- Port 53 (DNS) - Domain name resolution

**Firewall Rules:**
```
Allow outbound to *.cirrus-sync.com on ports 80, 443
Allow outbound to provider domains:
- *.googleapis.com (Google Drive)
- *.dropboxapi.com (Dropbox)
- *.microsoftonline.com (OneDrive)
- *.icloud.com (iCloud)
```

### Proxy configuration

**HTTP Proxy Setup:**
1. Go to Settings > Network > Proxy
2. Enable "Use Proxy"
3. Enter proxy details:
   - Type: HTTP/HTTPS
   - Host: proxy.company.com
   - Port: 8080
   - Authentication: If required
4. Test connection

**SOCKS Proxy:**
```json
{
  "proxy": {
    "type": "socks5",
    "host": "proxy.company.com",
    "port": 1080,
    "username": "user",
    "password": "pass"
  }
}
```

## Performance issues

### High CPU usage

**Causes:**
- Large number of files being processed
- Real-time sync monitoring many files
- Inefficient sync filters
- Background indexing

**Solutions:**
1. Pause sync temporarily
2. Adjust sync schedule to off-peak hours
3. Optimize sync filters
4. Increase sync interval
5. Close other resource-intensive applications

### High memory usage

**Problem:** Cirrus Sync using excessive RAM
**Solutions:**
1. Restart application
2. Clear local cache
3. Reduce number of concurrent syncs
4. Update to latest version
5. Check for memory leaks in logs

### Disk space issues

**Problem:** Running out of disk space
**Solutions:**
1. Enable Smart Sync to move files cloud-only
2. Adjust cache size limits
3. Clean up temporary files
4. Move sync folders to larger drive
5. Archive old files

## Error codes

### Common error codes

**E001 - Authentication Failed**
- Re-enter credentials
- Check account status
- Verify internet connection

**E002 - Network Timeout**
- Check internet connection
- Increase timeout values
- Contact ISP if persistent

**E003 - File Permission Denied**
- Check file permissions
- Run as administrator (if needed)
- Verify file not in use by another app

**E004 - Storage Quota Exceeded**
- Check cloud provider storage limits
- Delete unnecessary files
- Upgrade storage plan

**E005 - API Rate Limit Exceeded**
- Wait for rate limit reset
- Reduce sync frequency
- Contact support for higher limits

### Advanced diagnostics

**Enable Debug Logging:**
1. Go to Settings > Advanced > Logging
2. Set log level to "Debug"
3. Restart application
4. Reproduce issue
5. Collect logs from Help > Export Logs

**System Information:**
- Operating system version
- Available RAM and disk space
- Network configuration
- Antivirus software
- Other sync applications installed

## Getting additional help

### Log collection

**Automatic Log Collection:**
1. Menu > Help > Generate Support Package
2. Include system information
3. Add description of issue
4. Send to support team

**Manual Log Locations:**

**Windows:**
```
%APPDATA%\CloudSyncPro\logs\
```

**macOS:**
```
~/Library/Logs/CloudSyncPro/
```

**Linux:**
```
~/.local/share/cloudsyncpro/logs/
```

### Support channels

1. **Documentation** - Check this guide and FAQ
2. **Community Forum** - Search existing topics
3. **Support Ticket** - Submit detailed issue report
4. **Live Chat** - Real-time assistance (business hours)
5. **Email Support** - support@cloudsync-pro.com

### When contacting support

**Include This Information:**
- Cirrus Sync version
- Operating system and version
- Description of issue and steps to reproduce
- Error messages or codes
- Screenshots if relevant
- Log files (if requested)

**Response Times:**
- Free accounts: 48-72 hours
- Premium accounts: 24 hours
- Enterprise accounts: 4 hours (business hours)
