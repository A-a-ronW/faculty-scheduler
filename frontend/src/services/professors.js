import axios from 'axios';

const professorsService = {
    getProfessors: async () => {
        const response = await axios.get("http://localhost:3001/professors");
        return response.data;
    }
}

export default professorsService;