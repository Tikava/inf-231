const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const session = require('express-session')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: true,
}))

const PORT = 5000
const SECRET_KEY = "SuperSecretKey"
const users = []

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})


app.post('/api/register', async (req, res) => {
    const { username, email, fullName, password } = req.body

    if (!username || !email || !fullName || !password) {
        return res.status(400).send('All fields are required.')
    }

    const isUsernameTaken = users.some(user => user.username === username);
    const isEmailRegistered = users.some(user => user.email === email);

    if (isUsernameTaken) {
        return res.status(400).json({ error: 'Username has already been taken.' });
    }

    if (isEmailRegistered) {
        return res.status(400).json({ error: 'Email has already been registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    
    const newUser = {
        id: users.length,
        username,
        email,
        fullName,
        password: hashedPassword
    }

    users.push(newUser)
    res.status(201).json({ message: 'User registered successfully' })
})


app.post('/api/login', async (req, res) => {
    const { username, password } = req.body
    const user = users.find(u => u.username === username)
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ userId: user.id, username: user.username }, SECRET_KEY, {
                expiresIn: '1h'
            })

            res.json({ message: 'Logged in successfully', token: token })
        } else {
            res.status(400).json({ error: 'Invalid username or password' })
    }
})

app.get('/api/logout', (req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
});

app.post('/api/reset-password', async (req, res) => {
    const { token, oldPassword, newPassword } = req.body;

    try {
        const payload = jwt.verify(token, SECRET_KEY);
        const user = users.find(u => u.id === payload.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!await bcrypt.compare(oldPassword, user.password)) {
            return res.status(400).json({ message: 'Invalid old password' });
        }

        user.password = await bcrypt.hash(newPassword, 10);
        res.json({ message: 'Password reset successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Invalid or expired token' });
    }
});


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}


app.get('/api/user', authenticateToken, (req, res) => {
    const user = users.find(u => u.id === req.user.userId)

    if (!user) {
        res.status(404).json({ error: "User not found" })
        return
    }

    res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        fullName: user.fullName
    })
})