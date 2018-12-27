const { Api, rpc, TextEncoder, TextDecoder } = require("../eosConnect");

class Transaction {
  constructor(privateKey) {
    const signatureProvider = new JsSignatureProvider([privateKey]);
    this.api = new Api({
      rpc,
      signatureProvider,
      textDecoder: new TextDecoder(),
      textEncoder: new TextEncoder()
    });
  }

  async createAccount(creator, newAccount, publicKey) {
    try {
      const result = await this.api.transact(
        {
          actions: [
            {
              account: "eosio",
              name: "newaccount",
              authorization: [
                {
                  actor: creator,
                  permission: "active"
                }
              ],
              data: {
                creator,
                name: newAccount,
                owner: {
                  threshold: 1,
                  keys: [
                    {
                      key: publicKey,
                      weight: 1
                    }
                  ],
                  accounts: [],
                  waits: []
                },
                active: {
                  threshold: 1,
                  keys: [
                    {
                      key: publicKey,
                      weight: 1
                    }
                  ],
                  accounts: [],
                  waits: []
                }
              }
            },
            {
              account: "eosio",
              name: "buyrambytes",
              authorization: [
                {
                  actor: creator,
                  permission: "active"
                }
              ],
              data: {
                payer: creator,
                receiver: newAccount,
                bytes: 8192
              }
            },
            {
              account: "eosio",
              name: "delegatebw",
              authorization: [
                {
                  actor: creator,
                  permission: "active"
                }
              ],
              data: {
                from: creator,
                receiver: newAccount,
                stake_net_quantity: "1.0000 SYS",
                stake_cpu_quantity: "1.0000 SYS",
                transfer: false
              }
            }
          ]
        },
        {
          blocksBehind: 3,
          expireSeconds: 30
        }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async undelegatebw(from, receiver, netQuantity, cpuQuantity) {
    try {
      const result = await this.api.transact(
        {
          actions: [
            {
              account: "eosio",
              name: "undelegatebw",
              authorization: [
                {
                  actor: creator,
                  permission: "active"
                }
              ],
              data: {
                from,
                receiver,
                unstake_net_quantity: netQuantity,
                unstake_cpu_quantity: cpuQuantity,
                transfer: false
              }
            }
          ]
        },
        {
          blocksBehind: 3,
          expireSeconds: 30
        }
      );

      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Transaction;
