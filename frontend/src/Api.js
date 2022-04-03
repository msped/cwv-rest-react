import axios from "axios";

const Api =  axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-type": "application/json"
    }
})

export default Api