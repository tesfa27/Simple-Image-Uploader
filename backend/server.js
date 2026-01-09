const app = require('./src/app'); // Import the configuration from app.js
const dotenv = require('dotenv');

// Load environment variables (Port, DB URLs, etc.)
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});