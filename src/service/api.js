import { API, PATHS } from "./constant";

// export function addLmsUser (data, cb) {
//     API.POST(PATHS.CRM_LMS_ADD_USER, data, {},
//         function (res) {
//             console.log("ADD user  response is: ", res);
//             cb(res);
//         }
//     )
// }

export function getArticle(params, cb) {
    API.GET(PATHS.ARTICLE, {}, params, function (res) {
        cb(res);
    });
}
export function getPageCount(params, cb) {
    API.GET(PATHS.PAGE_COUNT, {}, params, function (res) {  cb(res); });
}
export function getAcademics(params, cb) {
    API.GET(PATHS.ACADEMICS, {}, params, function (res) {
        cb(res);
    });
}
export function getInstiLife(params, cb) {
    API.GET(PATHS.INSTILIFE, {}, params, function (res) {
        cb(res);
    });
}
export function getOpinion(params, cb) {
    API.GET(PATHS.OPINION, {}, params, function (res) {
        cb(res);
    });
}
export function getSciTech(params, cb) {
    API.GET(PATHS.SCITECH, {}, params, function (res) {
        cb(res);
    });
}
export function getSpotLight(params, cb) {
    API.GET(PATHS.SPOTLIGHT, {}, params, function (res) {
        cb(res);
    });
}
export function getSpotLightWatch(params, cb) {
    API.GET(PATHS.WATCH, {}, params, function (res) {
        cb(res);
    });
}

export function getPinnedList(params, cb) {
    API.GET(PATHS.PINNED, {}, params, function (res) {
        cb(res);
    });
}
export function getPinned(cb) {
    API.GET(PATHS.PINNEDLIST, {}, {}, function (res) {
        cb(res);
    });
}

export function getArticlebyId(id, cb) {
    API.GET(PATHS.ART(id), {}, {}, function (res) {
        console.log(res);
        cb(res);
    });
}

export function postNewsletter(params, cb) {
    API.POST(PATHS.NEWSLETTER, params, {}, function (res) {
        cb(res);
    });
}

export function getSearch(id, cb) {
    API.GET(PATHS.SEARCH(id), {}, {}, function (res) {
        console.log(res);
        cb(res);
    });
}

export function getRECENT(cb) {
    API.GET(PATHS.RECENT, {}, {}, function (res) {
        console.log(res);
        cb(res);
    });
}

export function getComment(id, cb) {
    API.GET(PATHS.COMMENT(id), {}, {}, function (res) {
        cb(res);
    });
}
export function postComment(params, cb) {
    API.POST(PATHS.COMMENTPOST, params, {}, function (res) {
        cb(res);
    });
}
