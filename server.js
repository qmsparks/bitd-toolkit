// ANCHOR external imports
const express = require('express');

//  ANCHOR security
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');

// ANCHOR internal imports
const routes = require('./routes');

// ANCHOR config
const PORT = process.env.PORT || 3001;
const app = express();
const LIMIT = rateLimit({
    max: 10000,
    windowMs: 24 * 60 * 60 * 1000,
    message: "Too many requests"
})

// ANCHOR middleware
app.use(express.json());
app.use(cors());
app.use(LIMIT);
app.use(mongoSanitize());


// ANCHOR API Routes
app.use('/api/v1/tools', routes.tools);
app.use('/api/v1/components', routes.components);

// ANCHOR Auth Routes
app.use('/api/v1/auth', routes.auth);

// ANCHOR Users Routes
app.use('/api/v1/users', routes.users);

// ANCHOR connection
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));