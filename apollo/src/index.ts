import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { bestItem } from "./data/bestItem";

const typeDefs = `#graphql
  type BestItem {
    id: Int!
    title: String!
    bannerImg:String!
    contents:String!
  }

  type Query {
    bestItem: [BestItem]
  }
`;

const resolvers = {
  Query: {
    bestItem: () => bestItem,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀 Server listening at: ${url}`);
})();
