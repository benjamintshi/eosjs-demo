const { expect } = require("chai");
const { Blockchain } = require("../eos/models");

const blockNum = 178218;
let tx_id = "313ab23374e3e1be71b3cf01df4bc01bd4bf4eb3268c7ace963beead943cc9b2";

describe("Blockchain 测试", () => {
  it("getBlock 测试", async () => {
    try {
      const result = await Blockchain.getBlock(blockNum);
      expect(result).to.not.be.null;
      expect(result.block_num).to.equal(blockNum);
      expect(result.id).to.not.be.undefined;
    } catch (error) {
      expect(false).to.be.true;
    }
  });

  it("getInfo 测试", async () => {
    try {
      const result = await Blockchain.getInfo();
      expect(result.chain_id).to.equal(
        "8c1cb2740337759abd64dc03064ed07141b01795d934a5bab7692ea5a3148c28"
      );
      expect(result.head_block_num).to.be.above(0);
    } catch (error) {
      expect(false).to.be.true;
    }
  });

  it("getAccount 测试", async () => {
    try {
      const result = await Blockchain.getAccount("eosioqa11111");
      expect(result.account_name).to.equal("eosioqa11111");
    } catch (error) {
      expect(false).to.be.true;
    }
  });

  it("getBalance 测试", async () => {
    try {
      const result = await Blockchain.getBalance({
        account: "eosio",
        symbol: "EOS"
      });
      expect(result.length).to.be.above(0);
    } catch (error) {
      console.log(error);
      expect(false).to.be.true;
    }
  });

  it("getTransaction 测试", async () => {
    try {
      const result = await Blockchain.getTransaction(tx_id);
      expect(result.block_num).to.equal(blockNum);
    } catch (error) {
      expect(false).to.be.true;
    }
  });
});
