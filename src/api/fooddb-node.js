import axios from 'axios';

const apiUrl = 'https://fooddb-node.herokuapp.com';
const apiKey = process.env.REACT_APP_API_KEY || 'test';

export const getIngredientsFromApi = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/ingredients?apiKey=${apiKey}`)
        return response.data;
    } catch (error) {
        console.error("Something bad happened!", error);
    }
}