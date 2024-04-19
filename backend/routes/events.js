const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.use(express.json());

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, startTime, endTime, days } = req.body;

    try {
        const updatedEvent = await prisma.event.update({
            where: {
                id: id
            },
            data: {
                title,
                startTime,
                endTime,
                days
            }
        });

        const updatedProfessor = await prisma.professor.findUniqueOrThrow({
            where: {
                id: updatedEvent.professorId
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                events: true
            }
        })

       res.send(updatedProfessor)
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