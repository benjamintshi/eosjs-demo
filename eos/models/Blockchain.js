const { rpc } = require("../eosConnect.js");

class Blockchain {
  /**
   * getAccount
   * @memberof Blockchain
   * @param {string} account 用户账号
   * @returns {Promise} result
   */
  static async getAccount(account) {
    try {
      const result = await rpc.get_account(account);
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
   * getBlock
   * @memberof Blockchain
   * @param {int} number 区块高度
   * @returns {Promise} result
   */
  static async getBlock(number) {
    try {
      const result = await rpc.get_block(number);
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
   * getInfo
   * @memberof Blockchain
   * @returns {Promise} result
   */
  static async getInfo() {
    try {
      const result = await rpc.get_info();
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
   * getBalance
   * @memberof Blockchain
   * @param {Object} {
   * {string} code 合约账号，默认 "eosio.token"
   * {string} account 账号
   * {string} symbol 货币符号，默认EOS
   * }
   * @returns {Promise} result
   */
  static async getBalance({ code = "eosio.token", account, symbol = "EOS" }) {
    try {
      const result = await rpc.get_currency_balance(code, account, symbol);
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
   * getTransaction
   * @memberof Blockchain
   * @param {string} tx_id 交易ID
   * @returns {Promise} result
   */
  static async getTransaction(tx_id) {
    try {
      const result = await rpc.history_get_transaction(tx_id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Blockchain;
