---
sidebar_position: 6
sidebar_label: Application Keys
---

# Application Keys

Application keys are the cornerstone of security and identification for your Grove application, enabling authenticated and secure interactions within the Grove RPC infrastructure. This guide details the purpose and management of the Application ID and Secret Key, ensuring you can confidently secure your application's communications.

## App ID

The App ID acts as a unique identifier for your application, integral to the URLs for your endpoints.

**Usage**: Incorporate the App ID into your application's configuration to direct requests accurately through the Grove infrastructure, ensuring they reach their intended destination without misrouting.

## Secret Key

A crucial security measure, the Secret Key is required for your applications when the "Private Secret Key Required" option is activated in the security settings. This key must accompany requests to verify their authenticity.

**Usage**: The Secret Key should be transmitted using HTTP Basic Authentication to establish a secure communication channel between your application and Grove endpoints. This ensures that only authorized requests are processed, safeguarding your application against unauthorized access.

## Managing Your Keys

By default, your Secret Key is concealed to protect its confidentiality. To view your Secret Key, click the eye icon, allowing you to verify or use the key when necessary.

**Copying Keys**: For convenience, a copy icon is placed next to both the App ID and Secret Key fields. Clicking this icon copies the respective value to your clipboard, simplifying the process of integrating these keys into your application or authentication setup.

**Security Reminder**: The security of your application hinges on the confidentiality of your Secret Key. It's imperative to keep this key private and only share it with trusted parties involved in your application's development and maintenance. Regular audits and updates of your keys are recommended to uphold the security integrity of your Grove applications.
