---
sidebar_position: 2.1
sidebar_label: Authentication
---

# Authentication

The Grove API uses Secret Keys to authenticate requests. You can view and manage your Secret Keys in the Grove Portal. Your Portal application security settings will determine if the Secret Key is required for each request made. → The Grove API uses secret keys to authenticate requests. To view the secret key for your application, go to the Grove Portal, click the name of your application and click the “Keys” tab. You may determine if the secret key is required for each request against your endpoint in the “Security Settings” tab of your application.

The Grove API uses Secret Keys to authenticate requests. To view the secret key for your application, go to the [Grove Portal](https://portal.grove.city) click the name of your application and click the “Keys” tab. You may determine if the secret key is required for each request against your endpoint in the [Security Settings](/guides/navigating-the-portal/app-security) tab of your application.

Secret Keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

Use your Secret Key by setting an `Authorization` header.

```curl
curl -H "Authorization: {app_secret_key}" https://rpc.grove.city/v1/{app_id}
```

[Find your Secret Key](/guides/navigating-the-portal/app-keys)
