import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID wY6hQU31hqjEhImflmiUiFXWAeXqbZKc3CZOZbzMh0c"
    }
});

