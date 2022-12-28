import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getSpotLightWatch } from "../service/api";
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
        /* you can also use 'auto' behaviour
       in place of 'smooth' */
    });
};

export default function SpotlightWatch() {
    const [page, setPage] = useState(1);
    const params = {
        page: page,
    };
    const [data1, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            getSpotLightWatch(params, (res) => {
                setData(res);
            });
        };
        fetchData();
    }, [page]);
    const data = data1.results;

    if (data) {
        return (
            <>
                {!data1.count ? <h1>Coming soon</h1> : <></>}
                {data.map((item) => (
                    <Card sx={{ marginBottom: "20px" }} key={item.sno}>
                        <ReactPlayer
                            width="inherit"
                            url={item.url}
                            controls={true}
                        />
                        <CardContent>
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
                            <ArrowBackIosIcon fontSize="small" />
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
                            <ArrowForwardIosIcon fontSize="small" />
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
