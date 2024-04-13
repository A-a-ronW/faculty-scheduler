const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.use(express.json());

router.post('/', async (req, res) => {
    const { title, professorId } = req.body;

    try {
        const event = await prisma.event.create({
            data: {
                title : title,
                professorId : professorId
            }
        });

        res.send(event);
    } catch (err) {
        res.status(500).send(`Failed to add new event. Error: ${err}`);
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, professorId } = req.body;

    try {
        const updatedEvent = await prisma.event.update({
            where: {
                id: id
            },
            data: {
                title,
                professorId
            }
        });

        res.send(updatedEvent)
    } catch (err) {
        res.status(500).send(`Failed to update event with id ${id}. Error: ${err}`);
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.event.delete({
            where: {
                id: id
            }
        });

        res.send("Event was deleted");
    } catch (err) {
        res.send(`Event not deleted. Error: ${err}`)
    }
})

module.exports = router;