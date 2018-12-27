const ecc = require("eosjs-ecc");

class Tool {
  static async randomKey() {
    try {
      const privateKey = await ecc.randomKey();
      const publickey = ecc.privateToPublic(privateKey);
      return {
        privateKey,
        publickey
      };
    } catch (error) {
      throw error;
    }
  }

  static createKeyFromSeed(secret) {
    ecc.seedPrivate(secret);
  }

  static privateToPublic(wif) {
    ecc.privateToPublic(wif);
  }

  static isValidPublic(pubkey) {
    const result = ecc.isValidPublic(pubkey);
    return result;
  }

  static isValidPrivate(wif) {
    const result = ecc.isValidPrivate(wif);
    return result;
  }

  static sign(data, wif) {
    const result = ecc.sign(data, wif);
    return result;
  }

  static verify({ signature, data, pubkey, encoding = "utf8", hashData }) {
    const result = ecc.verify(signature, data, pubkey);
    return result;
  }

  static sha256({ data, resultEncoding = "hex", encoding = "hex" }) {
    ecc.sha256(data);
  }
}

module.exports = Tool;
