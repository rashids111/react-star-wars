import axios from 'axios'

const url = "https://swapi.dev/api/starships/"

export default async function getAllStarships() {
    try {
        const response = await axios.get(url).then(res => res.data)
        //console.log(response.results)
        return response.results;
    } catch (error) {
        console.log('Error in getAllStarships', error)
    }
}