import axios from 'axios';

const base_url = "http://localhost:3001/events";

const eventsService = {
    createEvent: async (newEvent) => {
        const response = await axios.post(`${base_url}`, newEvent);
        return response.data;
    },
    updateEvent: async (id, updatedEvent) => {
        const response = await axios.patch(`${base_url}/${id}`, updatedEvent);
        return response.data;
    },
    deleteEvent: async (id) => {
        const response = await axios.delete(`${base_url}/${id}`);
        console.log(response);
    }
};

export default eventsService;