---
sidebar_position: 2.1
sidebar_label: Authentication
---

# Authentication

The Grove API uses Secret Keys to authenticate requests. You can view and manage your Secret Keys in the [Grove Portal](https://portal.grove.city). Your Portal [application security settings](/guides/navigating-the-portal/app-security) will determine if the Secret Key is required for each request made.

Secret Keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

Use your Secret Key by setting as an `Authorization` header.

```curl
curl -H "Authorization: {app_secret_key}" https://rpc.grove.city/v1/{app_id}
```

[Find your Secret Key](/guides/navigating-the-portal/app-keys)
