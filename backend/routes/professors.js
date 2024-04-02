const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.use(express.json());

router.get('/', async (req, res) => res.send(await prisma.professor.findMany()));

router.get('/:firstName/:lastName', async (req, res) => {
    const { firstName, lastName } = req.params;

    try {
        const professor = await prisma.professor.findUniqueOrThrow({
            where: {
                fullName: {
                    firstName: firstName,
                    lastName: lastName
                }
            }
        });

        res.send(professor);
    } catch(err) {
        res.status(404).send(`Professor ${firstName} ${lastName} not found`);
    }
});

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName } = req.body;

        const professor = await prisma.professor.create({
            data: {
                firstName: firstName,
                lastName: lastName
            }
        });

        res.send(professor);
    } catch (err) {
        res.status(500).send(`Failed to add new professor. Error: ${err}`)
    }
});

module.exports = router;