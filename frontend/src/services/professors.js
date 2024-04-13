import axios from 'axios';

const base_url = "http://localhost:3001/professors";

const professorsService = {
    createProfessor: async (newProfessor) => {
        const response = await axios.post(`${base_url}`, newProfessor);
        return response.data;
    },
    getProfessors: async () => {
        const response = await axios.get(`${base_url}`);
        return response.data;
    },
    updateProfessor: async (id, updatedProfessor) => {
        const response = await axios.patch(`${base_url}/${id}`, updatedProfessor);
        return response.data;
    },
    deleteProfessor: async (id) => {
        const response = await axios.delete(`${base_url}/${id}`);
        console.log(response);
    },
    createProfessorEvent: async (id, newEvent) => {
        const response = await axios.post(`${base_url}/${id}`, newEvent);
        return response.data;
    }
};

export default professorsService;