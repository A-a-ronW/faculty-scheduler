const express = require('express');
const app = express();
const PORT = process.env.port || 3001;
const professorRoutes= require('./routes/professors');
const cors = require('cors');

app.use(cors());
app.use('/professors', professorRoutes);

app.get('/', (req, res) => res.send("Welcome to the Professor Scheduling API"));

app.listen(PORT, () => console.log(`Express app listening on port ${PORT}`));