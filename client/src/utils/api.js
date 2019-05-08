import axios from 'axios';

export default {
    search: query => {
        return axios.get("/api/google", {params: {query: "title: " + query}});
    },
    getSaved: () => {
        return axios.get("/api/books");
    },
    delete: id => {
        return axios.delete("/api/books/" + id);
    },
    save: book => {
        return axios.post("/api/books", book);
    }
};