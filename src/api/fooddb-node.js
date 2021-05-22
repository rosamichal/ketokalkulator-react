import axios from 'axios';

const apiUrl = 'https://fooddb-node.herokuapp.com';

export const getIngredientsFromApi = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/ingredients`)
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Something bad happened!", error);
    }
}