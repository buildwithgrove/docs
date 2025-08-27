# .well-known Directory Documentation

The `.well-known/` directory contains standardized files for security, verification, and protocol support. These files help with SEO, security, and integration with various services.

## 📁 Files in .well-known/

### 1. **security.txt**
**Purpose**: Security policy and contact information for security researchers
**RFC**: [RFC 9116](https://datatracker.ietf.org/doc/html/rfc9116)
**Access**: `https://docs.grove.city/.well-known/security.txt`

```txt
Contact: mailto:security@grove.city
Expires: 2025-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://docs.grove.city/.well-known/security.txt
Policy: https://grove.city/security-policy
```

### 2. **change-password**
**Purpose**: Helps users find password change URLs
**RFC**: [RFC 8616](https://datatracker.ietf.org/doc/html/rfc8616)
**Access**: `https://docs.grove.city/.well-known/change-password`

```txt
https://portal.grove.city/account/security
```

### 3. **assetlinks.json**
**Purpose**: Android app verification and deep linking
**Documentation**: [Google Digital Asset Links](https://developers.google.com/digital-asset-links)
**Access**: `https://docs.grove.city/.well-known/assetlinks.json`

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.grove.city",
    "sha256_cert_fingerprints": [
      "SHA256_FINGERPRINT_PLACEHOLDER"
    ]
  }
}]
```

### 4. **apple-app-site-association**
**Purpose**: iOS app verification and deep linking
**Documentation**: [Apple App Site Association](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content)
**Access**: `https://docs.grove.city/.well-known/apple-app-site-association`

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "TEAM_ID.com.grove.city",
        "paths": ["*"]
      }
    ]
  },
  "webcredentials": {
    "apps": ["TEAM_ID.com.grove.city"]
  }
}
```

### 5. **host-meta**
**Purpose**: WebFinger protocol support
**RFC**: [RFC 6415](https://datatracker.ietf.org/doc/html/rfc6415)
**Access**: `https://docs.grove.city/.well-known/host-meta`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<XRD xmlns="http://docs.oasis-open.org/ns/xri/xrd-1.0">
  <Link rel="lrdd" template="https://docs.grove.city/.well-known/webfinger?resource={uri}"/>
</XRD>
```

### 6. **webfinger**
**Purpose**: WebFinger protocol resource discovery
**RFC**: [RFC 7033](https://datatracker.ietf.org/doc/html/rfc7033)
**Access**: `https://docs.grove.city/.well-known/webfinger`

```json
{
  "subject": "acct:grove@grove.city",
  "links": [
    {
      "rel": "http://webfinger.net/rel/profile-page",
      "type": "text/html",
      "href": "https://grove.city"
    },
    {
      "rel": "http://schemas.google.com/g/2010#updates-from",
      "type": "application/atom+xml",
      "href": "https://grove.city/feed"
    }
  ]
}
```

## 🔧 Configuration

### Robots.txt
The `.well-known/` directory is explicitly allowed in `robots.txt`:

```txt
# Allow .well-known directory for security and verification
Allow: /.well-known/
```

### Docusaurus Configuration
The `.well-known/` directory is served from the `static/` folder, making it accessible at the root of the domain.

## 🎯 Benefits

### Security
- **security.txt**: Provides clear contact information for security researchers
- **change-password**: Helps users find password change URLs quickly

### App Integration
- **assetlinks.json**: Enables Android app verification and deep linking
- **apple-app-site-association**: Enables iOS app verification and deep linking

### Protocol Support
- **host-meta**: Enables WebFinger protocol support
- **webfinger**: Enables resource discovery via WebFinger

### SEO Benefits
- **Trust signals**: Shows commitment to security and standards
- **Verification**: Enables various service verifications
- **Integration**: Supports modern web protocols and standards

## 🔄 Maintenance

### Regular Tasks
1. **Update security.txt** annually with current contact information
2. **Verify app associations** when mobile apps are updated
3. **Test WebFinger endpoints** for protocol compliance
4. **Monitor security.txt** usage and security reports

### Security Considerations
- Keep contact information current in security.txt
- Regularly review and update security policies
- Monitor for security reports via the provided contact
- Ensure proper access controls for sensitive endpoints

## 📚 Resources

### RFCs
- [RFC 9116 - Well-Known URIs for Security](https://datatracker.ietf.org/doc/html/rfc9116)
- [RFC 8616 - Well-Known URIs for Changing Passwords](https://datatracker.ietf.org/doc/html/rfc8616)
- [RFC 6415 - Web Host Metadata](https://datatracker.ietf.org/doc/html/rfc6415)
- [RFC 7033 - WebFinger](https://datatracker.ietf.org/doc/html/rfc7033)

### Documentation
- [Google Digital Asset Links](https://developers.google.com/digital-asset-links)
- [Apple App Site Association](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content)
- [WebFinger Protocol](https://webfinger.net/)

### Tools
- [Security.txt Validator](https://securitytxt.org/)
- [WebFinger Validator](https://webfinger.net/)
- [Digital Asset Links Validator](https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://docs.grove.city&relation=delegate_permission/common.handle_all_urls)

---

The `.well-known/` directory provides essential files for security, verification, and protocol support, enhancing the Grove documentation site's compliance with web standards and security best practices.
