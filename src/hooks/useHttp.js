import axios from 'axios';

const useHttp = () => {
    const baseUrl = "https://api.themoviedb.org/3";
    const apiKey = "api_key=0c92164abe0731c88f3aa1c81eefeff6"

    const getResponse = async (url="") => {
        try {
            const response = await axios.get(`${baseUrl}${url}${apiKey}`);
            return response.data
        } catch(e) {
            throw new Error(e)
        }
    }

    return {getResponse}
}
export default useHttp;