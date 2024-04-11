import axios from 'axios';

const base_url = "http://localhost:3001";

const eventsService = {
    createEvent: async (newEvent) => {
        const response = await axios.post(`${base_url}/events`, newEvent);
        return response.data;
    },
    getEvents: async () => {
        const response = await axios.get(`${base_url}/events`);
        return response.data;
    },
    updateEvent: async (id, updatedEvent) => {
        const response = await axios.patch(`${base_url}/events/${id}`, updatedEvent);
        return response.data;
    },
    deleteEvent: async (id) => {
        const response = await axios.delete(`${base_url}/events/${id}`);
        console.log(response);
    }
};

export default eventsService;