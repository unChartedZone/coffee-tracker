import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import dotenv from 'dotenv';

dotenv.config();

const link = new HttpLink({
  uri: 'https://api.yelp.com/v3/graphql',
  fetchOptions: {
    mode: 'no-cors',
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
    'Accept-Language': 'en-US',
  },
});

export default client;
