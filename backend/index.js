const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const professorRoutes= require('./routes/professors');
const cors = require('cors');
const bcrypt = require('bcrypt');


app.use(cors());
app.use(express.json());
app.use('/professors', professorRoutes);

const adminHash = process.env.ADMIN_HASH;

const authenticateAdmin = async (req, res, next) => {
    const { password } = req.body;

    const match = await bcrypt.compare(password, adminHash);

    if (match) {
        next();
    }

    res.status(401).send({ isAuthenticated: false });
};

app.post('/authenticate', authenticateAdmin, (req, res) => res.send({ isAuthenticated: true}));

app.get('/', (req, res) => res.send("Welcome to the Professor Scheduling API"));

app.listen(PORT, () => console.log(`Express app listening on port ${PORT}`));