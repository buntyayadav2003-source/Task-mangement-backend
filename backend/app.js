
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./config/db');
const taskRoute = require('./routes/taskRoute')

const app = express();
const port = process.env.PORT || 7011;

// Middleware
app.use(express.json());
app.use(cors());

// Home Route
app.get('/', (req, res) => {
    res.send('Hello World!');

});

app.use('/api/task', taskRoute)

// Start Server
const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}!`);
        });

    } catch (error) {
        console.log('Server failed:', error.message);
    }
};

startServer();



// http://localhost:7007/api/task/createTask
// http://localhost:7007/api/task/getAllTasks