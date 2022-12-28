import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getPinned } from "../../service/api";
export default function PinnedSideBar() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            getPinned((res) => {
                setData(res);
            });
        };
        fetchData();
    }, [setData]);

    return (
        <>
            <Card csx={{ marginTop: "10px", minWidth: 275 }}>
                <CardContent>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                                background: "brown",
                                textAlign: "center",
                                borderRadius: "4px",
                                padding: "5px",
                            }}
                        >
                            Pinned Articles
                        </div>
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
                                    key={item.sno}
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
