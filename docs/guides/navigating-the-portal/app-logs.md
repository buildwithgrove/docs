---
sidebar_position: 6
sidebar_label: Logs
---

# Logs

Logs are updated every minute and provide a record of relay activities within the past 24 hours. Users can filter logs based on various criteria such as application, relay type (error, success, or all), and specific date and time ranges.

## Filtering Logs

To filter logs, users can specify the following criteria:

- **Application**: Filter logs based on the associated application.
- **Relay Type**: Choose to view logs for successful relays, error relays, or both.
- **Date and Time Range**: Specify a starting date and time to filter logs within a specific one-hour window from the past 24 hours.

## Log Table

The log table consists of the following columns:
1. **Timestamp**: Displays the date and time of each log entry to the second.
2. **Method**: Indicates the type of relay activity, such as `eth_blocknumber`.
3. **Network**: Shows the chain API prefix, e.g., `eth-mainnet`.
4. **Status**: Indicates whether the relay activity was successful or resulted in an error.

## Viewing Detailed Log Information 

Clicking on a specific log entry provides detailed information about the relay, including:
- **Date**: The date of the relay activity.
- **Time**: The time of the relay activity.
- **Application ID**: Identifies the associated application.
- **Chain ID**: Specifies the chain ID.
- **Network**: Indicates the network associated with the relay activity.
- **Method**: Describes the type of relay activity.
- **Round Trip Time**: Indicates the time taken for the relay activity.

If the log entry represents an error, additional details, such as an error message, are provided below the summary.

## Tips for Effective Error Analysis

- **Regular Checks**: Routinely review your error logs to catch and address issues before they escalate.
- **Detail Orientation**: Leverage the detailed information provided in each log to understand the full scope of errors.
- **Proactive Correction**: Utilize the insights gained from error logs to implement fixes, preventing recurrence and enhancing application stability.