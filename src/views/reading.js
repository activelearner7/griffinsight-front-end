import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getArticlebyId } from "../service/api";
import { PATHS } from "../service/constant";
import { getPath } from "../store/helper";
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
        /* you can also use 'auto' behaviour
       in place of 'smooth' */
    });
};
export default function Read() {
    const location = useLocation();

    const [path] = useState(getPath(location.pathname));
    const [data, setData] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            getArticlebyId(path, (res) => {
                setData(res);
            });
        };
        fetchData();
    }, [path]);

    if (data !== 0) {
        scrollToTop();
        if (data.sno == -1) {
            return (
                <>
                    <h1>Coming soon</h1>
                </>
            );
        } else {
            return (
                <>
                    <div>
                        <h2 style={{ fontFamily: "'DM Serif Display', serif" }}>
                            <strong> {data.title}</strong>
                        </h2>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                            }}
                        >
                            <p className="text-muted">
                                {" "}
                                <i>
                                    {" "}
                                    By{" "}
                                    {data.profile ? (
                                        <>
                                            {" "}
                                            <a
                                                href={data.profile}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {data.author}
                                            </a>{" "}
                                        </>
                                    ) : (
                                        <>{data.author} </>
                                    )}
                                </i>
                            </p>
                            <p className="text-muted">{data.date}</p>
                        </div>

                        <img
                            width="100%"
                            height="100%"
                            style={{ marginBottom: "10px" }}
                            src={`${PATHS.BASE}${data.thumbnail}`}
                            alt=""
                        />

                        <div
                            className="example"
                            style={{ width: "inherit", overflow: "auto" }}
                        >
                            {parse(data.content)}
                        </div>
                    </div>
                    {/* <Comment/> */}
                </>
            );
        }
    } else {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        );
    }
}
