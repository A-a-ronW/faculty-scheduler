const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const professorRoutes = require('./routes/professors');
const eventRoutes = require('./routes/events');
const cors = require('cors');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(express.json());
app.use('/professors', professorRoutes);
app.use('/events',eventRoutes);

const adminHash = process.env.ADMIN_HASH;

const authenticateAdmin = async (req, res, next) => {
    const { password } = req.body;

    const match = await bcrypt.compare(password, adminHash);

    if (match) {
        next();
    } else {
        res.status(401).send({ isAuthenticated: false });
    }
};

app.post('/authenticate', authenticateAdmin, (req, res) => res.send({ isAuthenticated: true}));

app.use(express.static('dist'));

app.listen(PORT, () => console.log(`Express app listening on port ${PORT}`));