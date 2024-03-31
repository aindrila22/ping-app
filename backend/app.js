require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config');
const checkRoute = require("./routes/check");
const authRoute = require("./routes/auth");
const { spawn } = require('child_process');


const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(`${config.MONGO_URI}`);
const db = mongoose.connection;
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('MongoDB connected!!!');
});

// Use routes
app.use('/api/v1', checkRoute);
app.use('/api/v1', authRoute);

const childpython = spawn('python',['codespace.py', 'Solve It Out']);
childpython.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})
childpython.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`)
})
childpython.on('close', (code) => {
  console.log(`Child process exited with code ${code}`)
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});