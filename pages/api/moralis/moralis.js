const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

Moralis.start({
  apiKey: process.env.MORALIS_API_KEY,
  // ...and any other configuration
});

const address = "0x0c18aEe54A5e4bF95A1338BB6d1E8182491993D9";
const chain = 97;
const getWalletTransactions = async () => {
  try {
    const response = await Moralis.EvmApi.transaction.getWalletTransactions({
      address,
      chain,
    });
    console.log(response.toJSON());
    return response.toJSON();
  } catch (error) {
    console.error("Error fetching wallet transactions:", error);
  }
};

module.exports = {
  getWalletTransactions,
};
