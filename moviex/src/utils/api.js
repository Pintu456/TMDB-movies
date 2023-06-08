import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'

const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzIxMTJmMDViMTY4MjNjOGYwMDk2ZDMzZTRjZWM5YyIsInN1YiI6IjY0NDhkYTExZjJjZjI1MDRiOGFkYzI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q2KPWHfBmgoWZMmI3Tx8KPYNPtYAcTu2bmUlu1xUvxY';

const headers = {
    Authorization: "bearer " +
        TMDB_TOKEN,
}
export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}
