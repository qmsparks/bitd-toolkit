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
app.use('/api/v1/auth', routes.auth);

// ANCHOR Users Routes
app.use('/api/v1/users', routes.users);

// ANCHOR connection
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));