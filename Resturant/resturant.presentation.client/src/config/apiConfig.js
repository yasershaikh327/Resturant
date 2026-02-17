const ENV = process.env.NODE_ENV; // "development" or "production"

const BASE_URL =
    ENV === "development"
        ? "http://localhost:5000"
        : "https://ai-powered-resturant-ordering-system.onrender.com/";

const API = {
    POST: `${BASE_URL}api/Home/Post`,
    MENU: `${BASE_URL}api/menu`,
    ORDER: `${BASE_URL}api/order`,
};

export default API;
