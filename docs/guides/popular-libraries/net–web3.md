# .NET – Web3

### Overview

Web3 is a simple wrapper for interacting with JSON RPC, and is provided by Nethereum, a suite of .NET Ethereum development tools.

### Resources

[Documentation](https://docs.nethereum.com/en/latest/introduction/web3/)

[Installation Guide](https://docs.nethereum.com/en/latest/getting-started/)

### Basic Usage

```csharp
using System;
using System.Threading.Tasks;
using Nethereum.Web3;

namespace NethereumSample
{
    class Program
    {
        static void Main(string[] args)
        {
            GetAccountBalance().Wait();
            Console.ReadLine();
        }

        static async Task GetAccountBalance()
        {
            var URL = "https://<NETWORK>.rpc.grove.city/v1/<PORTAL_ID>";
            var ACCCOUNT = "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae";
            var web3 = new Web3(URL);
            var balance = await web3.Eth.GetBalance.SendRequestAsync(ACCOUNT);
            Console.WriteLine($"Balance in Wei: {balance.Value}");

            var etherAmount = Web3.Convert.FromWei(balance.Value);
            Console.WriteLine($"Balance in Ether: {etherAmount}");
        }
    }
}
```
