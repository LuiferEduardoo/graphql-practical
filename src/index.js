const startServer = require('./graphql/index');

const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json())

startServer(app)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});