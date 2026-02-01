# Metris Onboarding Portal

## One-Liner
A self-service portal that guides utility-scale solar customers through securely sharing their monitoring platform credentials, replacing manual back-and-forth with a streamlined, professional experience.

---

## The Problem

**Current State:**
- Customers receive a basic form asking "which platforms do you use?" with toggle switches
- No guidance on *how* to get API keys or grant access
- Credentials shared via unstructured emails or ad-hoc methods
- Manual follow-up required for incomplete submissions
- 5-7 day turnaround creates friction and delays data collection
- Process feels unprofessional for sophisticated utility-scale customers

**Pain Points:**
- Customers don't know where to find their API credentials
- Multiple back-and-forth emails to get correct information
- Security concerns about sharing sensitive credentials
- No visibility into submission status

---

## The Solution

A guided, self-service onboarding portal that:

1. **Educates customers** with step-by-step instructions for each platform
2. **Shows video walkthroughs** (Loom) demonstrating exactly how to get credentials
3. **Emphasizes security** with 1Password as the recommended sharing method
4. **Provides direct support** with email links on every page
5. **Tracks progress** with a clear multi-step flow

---

## Platforms Supported

### Inverters (8)
| Platform | Credential Type |
|----------|-----------------|
| SolarEdge | API Key + Site ID |
| Solis Cloud | API Key + Secret |
| SMA Sunny Portal | User Invitation |
| Sungrow iSolarCloud | App ID + Secret |
| Huawei FusionSolar | Northbound API credentials |
| Fronius Solar.web | Access Key |
| Fox ESS | API Key |
| Growatt | API Access Request |

### Meters (7)
| Platform | Credential Type |
|----------|-----------------|
| Meters Online | API Key + Customer ID |
| Stark | Data Sharing Agreement |
| Passiv Systems | API Token |
| Juggle | API Key |
| RBEE Solar | User Invitation |
| MeterZ | User Invitation |
| Argand | API Key |

---

## Key Features

| Feature | Benefit |
|---------|---------|
| **Step-by-step guides** | Customers can self-serve without contacting support |
| **Video tutorials** | Visual walkthroughs reduce confusion and errors |
| **1Password integration** | Enterprise-grade security for credential sharing |
| **Platform-specific instructions** | Accurate paths for each OEM portal |
| **Progress tracking** | Customers know where they are in the process |
| **Support fallback** | Direct email to support@metrisenergy.com on every page |

---

## Business Impact

### Reduced Onboarding Time
- **Before:** 5-7 business days with multiple email exchanges
- **After:** Same-day submission with correct credentials on first attempt

### Lower Support Burden
- Fewer "how do I get my API key?" emails
- Video guides answer common questions proactively

### Improved Customer Experience
- Self-service for tech-savvy customers
- Professional, polished first impression
- Clear security messaging builds trust

### Faster Time-to-Value
- Data collection starts sooner
- Customers see ROI from Metris faster

---

## Future Enhancements

| Phase | Enhancement |
|-------|-------------|
| **Phase 2** | Direct credential submission to Metris database (encrypted) |
| **Phase 3** | Automatic credential validation (test API before saving) |
| **Phase 4** | Customer portal showing submission status |
| **Phase 5** | OAuth flows for platforms that support it |

---

## Content Required

- [ ] 15 Loom videos (one per platform) demonstrating credential retrieval
- [ ] Review/update instructions as OEM portals change
- [ ] Production hosting and domain setup (onboarding.metrisenergy.com)

---

## Videos to Record

### Inverter Platforms
1. SolarEdge - How to get API Key + Site ID
2. Solis Cloud - How to apply for API access and get KeyId + KeySecret
3. SMA Sunny Portal - How to invite luke@metrisenergy.com as read-only user
4. Sungrow iSolarCloud - How to get AppID + AppSecret
5. Huawei FusionSolar - How to create Northbound API account
6. Fronius Solar.web - How to generate Access Key
7. Fox ESS - How to generate API Key
8. Growatt - How to request API access

### Meter Platforms
9. Meters Online - How to get API Key + Customer ID
10. Stark - How to request data sharing agreement
11. Passiv Systems - How to generate API Token
12. Juggle - How to create API Key
13. RBEE Solar - How to invite luke@metrisenergy.com
14. MeterZ - How to add luke@metrisenergy.com
15. Argand - How to get API Key + Account ID

---

*Last updated: January 2026*
