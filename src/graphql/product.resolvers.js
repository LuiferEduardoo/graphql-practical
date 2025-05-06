const product = (_, args) => {
  return {
    id: args.id,
    name: `Product ${args.id}`,
    price: 10,
    description: `Description of product ${args.id}`,
    image: `https://example.com/image${args.id}.jpg`,
    createdAt: new Date().toISOString(),
  };
}

const products = (_, args) => {
  return [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      description: "Description of product 1",
      image: "https://example.com/image1.jpg",
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      description: "Description of product 2",
      image: "https://example.com/image2.jpg",
      createdAt: new Date().toISOString(),
    },
  ];
}

module.exports = { product, products };