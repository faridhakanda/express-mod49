const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

const users = [
    {"id": 1, "name": "Farid Akanda", "email": "farid@gmail.com"},
    {"id": 2, "name": "Zaheed Sabur", "email": "zaheed@gmail.com"},
    {"id": 3, "name": "Tamim Shahriar", "email": "tamim@gmail.com"},
    {"id": 4, "name": "Zulkernine Mahmud", "email": "zulkernine@gmail.com"},
];

app.get('/', (req, res) => {
    res.send("Hello, ExpressJS Project!")
})

app.get('/about', (req, res) => {
    res.send("This is about page!")
})
app.get('/users', (req, res) => {
    res.send("User details page for express project!")
})

// user get and post api
app.get('/user', (req, res) => {
    res.send(users);
})
app.post('/user', (req, res) => {
    console.log('post method is working!', req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send({ success: true, data: newUser, message: 'Post method is working!'});
})


app.get('/contact', (req, res) => {
    res.send('Contact Page for Express.js');
})

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})