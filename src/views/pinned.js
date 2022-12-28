import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPinnedList } from "../service/api";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
        /* you can also use 'auto' behaviour
       in place of 'smooth' */
    });
};
const Style = { textDecoration: "none", color: "black" };

export default function Pinned() {
    const [page, setPage] = useState(1);
    const params = {
        page: page,
    };
    const [data1, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            getPinnedList(params, (res) => {
                setData(res);
            });
        };
        fetchData();
    }, [page]);
    const data = data1.results;

    if (data) {
        return (
            <>
                {data.map((item) => (
                    <Card sx={{ marginBottom: "5px" }} key={item.sno}>
                        <Link to={`/${item.sno}`} style={Style}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="500"
                                image={item.thumbnail}
                            />
                        </Link>
                        <CardContent>
                            <Link to={`/${item.sno}`} style={Style}>
                                <Typography
                                    style={{
                                        fontFamily: "'DM Serif Display', serif",
                                    }}
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {item.title}
                                </Typography>
                            </Link>
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
                                        {item.profile ? (
                                            <>
                                                {" "}
                                                <a
                                                    href={item.profile}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item.author}
                                                </a>{" "}
                                            </>
                                        ) : (
                                            <>{item.author} </>
                                        )}
                                    </i>
                                </p>
                                <p className="text-muted">{item.date}</p>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                {item.summary}
                            </Typography>
                        </CardContent>
                        <CardActions></CardActions>
                    </Card>
                ))}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        marginBottom: "10px",
                    }}
                >
                    {data1.previous ? (
                        <IconButton
                            aria-label="delete"
                            size="small"
                            onClick={() => {
                                setPage(page - 1);
                                scrollToTop();
                            }}
                        >
                            <ArrowBackIcon fontSize="small" />
                        </IconButton>
                    ) : (
                        <></>
                    )}

                    {data1.next ? (
                        <IconButton
                            aria-label="delete"
                            size="small"
                            onClick={() => {
                                setPage(page + 1);
                                scrollToTop();
                            }}
                        >
                            <ArrowForwardIcon fontSize="small" />
                        </IconButton>
                    ) : (
                        <></>
                    )}
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </>
        );
    }
}
