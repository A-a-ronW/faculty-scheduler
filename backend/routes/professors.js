const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => res.send(await prisma.professor.findMany()))

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
})

module.exports = router;