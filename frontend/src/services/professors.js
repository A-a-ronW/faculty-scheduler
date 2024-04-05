import axios from 'axios';

const professorService = {
    getProfessors: async () => {
        const response = await axios.get("http://localhost:3001/professors");
        return response.data;
    }
}

export default professorService;