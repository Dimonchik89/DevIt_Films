import axios from "axios";
import qs from "qs"

const defaultClient = {
    client: axios.create({
        baseURL: "https://api.themoviedb.org/3/",
        maxContentLength: 20000,
        timeout: 180000,
        headers: {
            "Content-Type": "application/json",
        },
        paramsSerializer: function(params) {
            return qs.stringify(params, { arrayFormat: "brackets"});
        },
    }),
    options: {
        interceptors: {
            request: [
                (_, req) => {
                    req.params = {
                        ...req.params,
                        api_key: "0c92164abe0731c88f3aa1c81eefeff6"
                    }
                    req.url = "https://api.themoviedb.org/3" + req.url
                    return req;
                },
            ],
            response: [],
        },
    },
};
export default defaultClient;