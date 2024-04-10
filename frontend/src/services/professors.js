import axios from 'axios';

const base_url = "http://localhost:3001";

const professorsService = {
    createProfessor: async (newProfessor) => {
        const response = await axios.post(`${base_url}/professors`, newProfessor);
        return response.data;
    },
    getProfessors: async () => {
        const response = await axios.get(`${base_url}/professors`);
        return response.data;
    },
    updateProfessor: async (id, updatedProfessor) => {
        const response = await axios.patch(`${base_url}/professors/${id}`, updatedProfessor);
        return response.data;
    },
    deleteProfessor: async (id) => {
        const response = await axios.delete(`${base_url}/professors/${id}`);
        console.log(response);
    }
};

export default professorsService;