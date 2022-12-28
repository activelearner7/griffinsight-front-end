import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React, { useEffect, useState } from "react";
import { getRECENT } from "../service/api";
export default function RecentPost() {
    const [data, setData] = useState([]);
    useEffect(async () => {
        getRECENT((res) => {
            setData(res.results);
        });
    }, [setData]);
    return (
        <>
            <Card sx={{ marginTop: "20px", minWidth: 275 }}>
                <CardContent>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            variant="outlined"
                            style={{ color: "brown" }}
                            disabled
                        >
                            Recent Post
                        </Button>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "10px",
                        }}
                    >
                        {data.map((item) => (
                            <>
                                <a
                                    href={`/${item.sno}`}
                                    style={{
                                        color: "black",
                                        textDecoration: "None",
                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        style={{
                                            color: "black",
                                            border: "none",
                                        }}
                                    >
                                        {item.title}
                                    </Button>
                                </a>
                            </>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
