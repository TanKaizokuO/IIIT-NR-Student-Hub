require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

//database connection
connection();

//.middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));