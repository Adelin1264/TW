const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key'; 

app.use(cors());
app.use(bodyParser.json());
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    fs.readFile('users.json', (err, data) => {
        if (err) {
            res.status(500).send('Internal server error');
            return;
        }

        const users = JSON.parse(data);
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' });

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            
            res.status(200).json({ token });
        } else {
            res.status(401).send('Invalid email or password');
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
