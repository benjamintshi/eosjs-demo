const { Api, JsonRpc, RpcError } = require("eosjs");
const { TextEncoder, TextDecoder } = require("util");
const fetch = require("node-fetch");
const { eos_node } = require("./config");

const rpc = new JsonRpc(eos_node.url, { fetch });

module.exports = {
  Api,
  rpc,
  TextEncoder,
  TextDecoder
};
