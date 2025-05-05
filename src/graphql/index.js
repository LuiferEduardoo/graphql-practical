const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { loadFiles } = require("@graphql-tools/load-files");

const resolvers = {
  Query: {
    hello: () => "Hola, mundo",
    getProduct: () => {
      return {
        id: 1,
        name: "Product 1",
        price: 10,
        description: "Description of product 1",
        image: "https://example.com/image1.jpg",
        createdAt: new Date(),
      };
    },
  },
};

const startServer = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles("./src/**/*.graphql"),
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await server.start();
  server.applyMiddleware({ app });
};

module.exports = startServer;
