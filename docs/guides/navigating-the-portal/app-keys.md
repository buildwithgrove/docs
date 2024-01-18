---
sidebar_position: 8
sidebar_label: Application Keys
---

# Application Keys

Application keys serve as unique identifiers and tokens for your Grove application, enabling secure interaction with the Grove RPC infrastructure.

---

## App ID

- **Description**: The App ID is a unique identifier for your application, included as part of the URL for each endpoint.
- **Usage**: Use the App ID in your application configuration to ensure proper routing of requests through the Grove infrastructure.

---

## Secret Key

- **Description**: The Secret Key is a security feature for your applications. If “Private Secret Key Required” is selected in the security settings, the secret key will need to be included with requests.
- **Usage**: Transmit the Secret Key using HTTP Basic Authentication for secure communication between your application and Grove endpoints.

---

## Management

- **Viewing Keys**: Your Secret Key is hidden by default for security. Click the eye icon to view and confirm your key.
- **Copying Keys**: Use the copy icon next to the App ID and Secret Key fields to easily copy these values to your clipboard.

---

Remember to keep your Secret Key confidential to prevent unauthorized access to your application. Regularly review and manage your keys to maintain the security of your Grove applications.
