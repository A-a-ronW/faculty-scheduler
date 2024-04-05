import axios from 'axios';

const professorsService = {
    getProfessors: async () => {
        const response = await axios.get("http://localhost:3001/professors");
        return response.data;
    },
    updateProfessor: async (id, updatedProfessor) => {
        const response = await axios.patch(`http://localhost:3001/professors/${id}`, updatedProfessor);
        return response.data;
    }
};

export default professorsService;