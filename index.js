// 2) index.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all versioned bundles under /assets
// e.g. GET /assets/v2/filename.bundle.js
app.use('/assets', express.static(path.join(__dirname, 'finished')));

// Healthcheck endpoint
app.get('/', (req, res) => {
  res.send('🟢 gg-assets server is up! Service /assets is available');
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
