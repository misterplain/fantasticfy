const asyncHandler = require("express-async-handler");
const axios = require("axios");

const fetchData = asyncHandler(async (req, res) => {
  const options = {
    method: "GET",
    url: "https://test-fullstack.myshopify.com/admin/api/2023-04/products.json",
    headers: {
      "X-Shopify-Access-Token": "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",
      "Content-Type": "application/json",
    },
  };
  const { data } = await axios.request(options);
  console.log(data)

  res.json(data);
});

module.exports = { fetchData };
