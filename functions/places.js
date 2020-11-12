const yelp = require("yelp-fusion");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

exports.handler = async function (event, context, callback) {
  const apiKey = `${process.env.REACT_APP_YELP_API_KEY}`;
  const client = yelp.client(apiKey);
  const { term, location, limit } = event.queryStringParameters;

  const searchRequest = {
    term,
    location,
    limit,
  };

  try {
    let res = await client.search(searchRequest);

    return await callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        res,
      }),
    });
  } catch (err) {
    return callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        err,
      }),
    });
  }
};
