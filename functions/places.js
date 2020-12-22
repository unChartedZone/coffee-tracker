const yelp = require("yelp-fusion");
const dotenv = require("dotenv");
dotenv.config();

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

exports.handler = async function (event, context, callback) {
  const apiKey = `${process.env.REACT_APP_YELP_API_KEY}`;
  const client = yelp.client(apiKey);
  const { term, location, limit, offset } = event.queryStringParameters;

  const searchRequest = {
    term,
    location,
    limit,
    offset,
  };

  let res = null;

  try {
    res = await client.search(searchRequest);
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      res,
    }),
  };
};
