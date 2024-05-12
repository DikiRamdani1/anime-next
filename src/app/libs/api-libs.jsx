import axios from "axios"

const GetApiManga = async(resource, query) => {
    const respone = await axios.get(`${process.env.API_BASE_URL}/${resource}?${query}`)
    const api = respone.data
    return api
}

export default GetApiManga