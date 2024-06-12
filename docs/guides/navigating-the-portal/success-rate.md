---
sidebar_position: 9
sidebar_label: Success Rate
---

# Understanding Success Rate

It represents the percentage of successful service after accounting for various failures. By carefully distinguishing between user errors and non-user errors, we ensure that our success rate accurately reflects the performance and reliability of our service, helping us maintain high standards and identify areas for improvement.

## Here's how we define it

1. **Total Number of User Calls:** The total requests made by the user.
2. **Total Number of User Errors:** Errors caused by user-related issues.
3. **Total Number of Portal Errors:** Errors occurring within our portal infrastructure, from Multi-Cluster Ingress to Middleware.
4. **Total Number of Network Failures:** Failures within the Pocket Network, including node errors, response incorrectness, network unreachability, and gigastakes collisions.

## Success Rate Formula

**Success Rate** = (Total Number of User Calls - Total Number of User Errors) / ((Total Number of User Calls - Total Number of User Errors) - (Total Number of Portal Errors + Total Number of POKT Network Failures))

## Error Categorization

To measure the success rate accurately, we need to differentiate between user and non-user errors.

### User Errors:
- **Definition:** Errors from user actions or configurations.
- **Examples:**
  - Bad Security Key: Incorrect or invalid security key.
  - Rate Limited: Exceeding allowed requests.
  - Poor Format: Malformed requests.

### Non-User Errors:
- **Portal Errors:**
  - **Definition:** Errors within our portal infrastructure.
  - **Examples:** Internal server issues, middleware processing errors.
- **POKT Network Failures:**
  - Node Errors: Issues at the node level.
  - Response Incorrectness: Expected vs. actual response discrepancies.
  - Network Unreachable: Chain halt situations.
  - Gigastakes Collision: Conflicts due to Gigastakes.

## Example Calculation

Let's break down an example to illustrate how the success rate is calculated:

**User A's Activity:**
- Sends 100 million relays over the month.
- Encounters 6 million user errors (e.g., bad security key, rate limited, poor format).
- Experiences 100,000 portal errors.
- Faces 500,000 POKT network failures.

### Step-by-Step Calculation:

1. **Calculate Applicable Relays:**

   Applicable Relays = Total Number of User Calls - Total Number of User Errors  
   Applicable Relays = 100M - 6M = 94M

2. **Calculate Total Failures:**

   Total Failures = Total Number of Portal Errors + Total Number of POKT Network Failures  
   Total Failures = 100K + 500K = 600K

3. **Calculate Success Rate:**

   Success Rate = (Applicable Relays - Total Failures) / Applicable Relays  
   Success Rate = (94M - 600K) / 94M  
   Success Rate = 93.4M / 94M ≈ 99.36%

Thus, User A's success rate for the month is **99.36%**.
