const express = require('express');

const app = express();
app.use(express.static('./src/pages'))

app.get('/', (_, res) => {
  return res.send('API is running...');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, access http://localhost:${PORT}`);
});
