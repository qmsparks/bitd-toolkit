// ANCHOR external imports
const express = require('express');
const cors = require('cors');

// ANCHOR internal imports
const routes = require('./routes');

// ANCHOR config
const PORT = process.env.PORT || 3001;
const app = express();

// ANCHOR middleware
app.use(express.json());
app.use(cors());


// ANCHOR API Routes
app.use('/api/v1/tools', routes.tools);
app.use('/api/v1/components', routes.components);

// ANCHOR Auth Routes

// ANCHOR Users Routes

// ANCHOR connection
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));