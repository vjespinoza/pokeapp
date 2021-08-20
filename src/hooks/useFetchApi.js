import { useState } from "react";
import axios from "axios";

const useFetchApi = ({ url }) => {
    const [fetchData, setFecthData] = useState(null);

    const api = axios.create({
        baseURL: url,
    });

    const postRequest = async (dataObj) => {
        try {
            let request = await api.post("/", dataObj);
            let response = request.data;
            setFecthData(response);
        } catch (err) {
            return err;
        }
    };

    const getRequest = async (query) => {
        try {
            let request = await api.get(`/${query}`);
            let response = request.data;
            setFecthData(response);
        } catch (err) {
            return err;
        }
    };

    return { fetchData, postRequest, getRequest };
};

export default useFetchApi;
