const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const customerRoutes=require('./routes/customers');
// npm i express dotenv bcryptjs jsonwebtoken json-server axios 

const app = express();

app.use(express.json());

const cors=require('cors');
app.use(cors()); //middleware

// // Routes
// route middleware
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/customers',customerRoutes);
app.get('/', (req, res) => {
    res.send('Hello World');
});
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});