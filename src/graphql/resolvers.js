const { product, products } = require("./product.resolvers");

const resolvers = {
  Query: {
    hello: () => "Hola, mundo",
    product,
    products,
  },
};

module.exports = resolvers;