const bcrypt = require('bcryptjs');
const axios = require('axios');
const { generateToken } = require('../utils/jwt');
// const jwt = require('jsonwebtoken');
const { response } = require('express');
const userEndpoint = 'http://localhost:3001/users';

const register = async (req, res) => {
    console.log(req.body)
    const { username, email, password } = req.body;

    try {
        const existingUsers = await axios.get(userEndpoint);
        const user = existingUsers.data.find(u => u.email === email);
        if (user) {
            // return res.status(400).send('User already exists');
            return res.status(400).json({ message: 'User already exists', response: "user registration failed" });

        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await axios.post(userEndpoint, { username, email, password: hashedPassword });
        res.send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
}

const login = async (req, res) => {
    // console.log(res.body)
    console.log(req.body)

    const { email, password } = req.body;
    console.log(password)
    try {
        // const existingUsers = await axios.get(userEndpoint);
        const existingUsers = await axios.get(userEndpoint);
        const user = existingUsers.data.find(u => u.email === email);
        console.log("user =>", user)
        if (!user) {
            // return res.status(400).send('User not register');
            return res.status(401).send({message:'User not register'});

        }
        console.log("ok")
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            // return res.status(400).send('Invalid password');
            return res.status(400).json({message:'Email And Password Do Not Match'});
        }
        console.log("validPassword =>",validPassword)
        
        const token = generateToken(user);
        console.log(token)
        res.send({ token });
    } catch (error) {
        res.status(500).send('Error logging in');
    }
};

module.exports = { login, register };