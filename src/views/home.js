import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Parser from "html-react-parser";
import React, { useEffect, useState } from "react";
import { getArticle } from "../service/api";
export default function Home() {
    const [data, setData] = useState([]);
    useEffect(async () => {
        getArticle((res) => {
            setData(res.results);
        });
    }, [setData]);
    console.log(data);
    return (
        <>
            <Container>
                <Stack
                    direction="column"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    {data.map((item) => (
                        <Card>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={item.thumbnail}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {Parser(item.content)}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    ))}
                </Stack>
            </Container>
        </>
    );
}
