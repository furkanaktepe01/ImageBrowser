import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID wY6hQU*************************bzMh0c"
    }
});

// API key is hidden for security purposes.
