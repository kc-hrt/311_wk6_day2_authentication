require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routers/users');
const authRouter = require('./routers/auth');

const app = express();
const port = process.env.PORT || 4003;

app.use(bodyParser.json())
app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
