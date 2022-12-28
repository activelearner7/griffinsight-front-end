import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE;
export const PATHS = {
    BASE: BASE_URL,
    ARTICLE: BASE_URL + "/article/",
    PAGE_COUNT: BASE_URL + "/article/getpagecount",
    ART: (id) => BASE_URL + "/article/" + id + "/",
    NEWSLETTER: BASE_URL + "/newsletter/",
    SEARCH: (id) => BASE_URL + "/search/" + id + "/",
    RECENT: BASE_URL + "/article/recent",
    COMMENT: (id) => BASE_URL + "/comment/" + id + "/",
    COMMENTPOST: BASE_URL + "/comment/",
    ACADEMICS: BASE_URL + "/article/academics",
    INSTILIFE: BASE_URL + "/article/instilife",
    SPOTLIGHT: BASE_URL + "/article/spotlight",
    SCITECH: BASE_URL + "/article/scitech",
    OPINION: BASE_URL + "/article/opinion",
    WATCH: BASE_URL + "/spotlight/",
    PINNED: BASE_URL + "/pinnned/",
    PINNEDLIST: BASE_URL + "/pinned/",
};

export const API = {
    GET: (url, body = {}, params = {}, cb) => {
        axios
            .get(url, {
                data: body,
                params: params,
            })
            .then((res) => {
                cb(res.data);
            })
            .catch((error) => {
                console.error("ERROR:", error);
                cb(null);
            });
    },
    POST: (url, body = {}, params = {}, cb) => {
        axios
            .post(url, body, {
                params: params,
            })
            .then((res) => {
                cb(res.data);
            })
            .catch((err) => {
                console.log("ERROR: ", err);
                cb(null);
            });
    },
    PATCH: (url, body = {}, params = {}, cb) => {
        axios
            .patch(url, body, {
                params: params,
            })
            .then((res) => {
                cb(res.data);
            })
            .catch((err) => {
                console.log("ERROR: ", err);
                cb(null);
            });
    },
    DELETE: (url, body = {}, cb) => {
        axios
            .delete(url, {
                data: body,
            })
            .then((res) => {
                cb(res);
            })
            .catch((err) => {
                console.error("ERROR: ", err);
                cb(null);
            });
    },
};
