const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.use(express.json());

router.get('/', async (req, res) => res.send(await prisma.professor.findMany()));

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const professor = await prisma.professor.findUniqueOrThrow({
            where: {
                id: id
            }
        });

        res.send(professor);
    } catch(err) {
        res.status(404).send(`Professor with id ${id} not found`);
    }
});

router.post('/', async (req, res) => {
    const { firstName, lastName } = req.body;

    try {
        const professor = await prisma.professor.create({
            data: {
                firstName: firstName,
                lastName: lastName
            }
        });

        res.send(professor);
    } catch (err) {
        res.status(500).send(`Failed to add new professor. Error: ${err}`);
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    try {
        const updatedProfessor = await prisma.professor.update({
            where: {
                id: id
            },
            data: {
                firstName: firstName,
                lastName: lastName
            }
        });

        res.send(updatedProfessor)
    } catch (err) {
        res.status(500).send(`Failed to update professor with id ${id}. Error: ${err}`);
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.professor.delete({
            where: {
                id: id
            }
        });

        res.send("Professor was deleted");
    } catch (err) {
        res.send(`Professor not deleted. Error: ${err}`)
    }
})

module.exports = router;