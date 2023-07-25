const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

Moralis.start({
  apiKey: process.env.MORALIS_API_KEY,
  // ...and any other configuration
});

const getTokenPrice = async () => {
  const address = "0xe9e7cea3dedca5984780bafc599bd69add087d56";

  const chain = EvmChain.BSC;
  try {
    const response = await Moralis.EvmApi.token.getTokenPrice({
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
  getTokenPrice,
};
