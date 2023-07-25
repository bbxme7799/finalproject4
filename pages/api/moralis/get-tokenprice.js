const { getTokenPrice } = require("./tokenprice");

const getWalletTokenPriceHandler = async (req, res) => {
  try {
    // Fetch the token price from an external API using the 'getTokenPrice' function
    const tokenPrice = await getTokenPrice();

    // Send the fetched token price as a response
    res.status(200).json({ tokenPrice });
  } catch (error) {
    // Handle any errors that occur during the process and send an appropriate error response
    res
      .status(500)
      .json({ error: "An error occurred while processing the request" });
  }
};

export default getWalletTokenPriceHandler;
