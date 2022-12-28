import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import PinnedSideBar from "../components/Articles/pinned";
import FooterMob from "../components/footerMob";
import VideoBar from "../components/videoplayer";
import { postNewsletter } from "../service/api";
import { containsAnyDigit, getPath } from "../store/helper";
import Academics from "./academics";
import { NotFoundPage } from "./error";
import Articles from "./general";
import InstiLife from "./instiLife";
import Opinion from "./opinion";
import Read from "./reading";
import SciTech from "./sciTech";
import Spotlight from "./spotlight";

export default function MobileMain() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState();
    function handleSubmit(e) {
        e.preventDefault();
        const params = {
            name: e.target[1].value,
            email: e.target[0].value,
        };

        postNewsletter(params, (res) => {
            setMessage(res);
        });
        console.log("You clicked submit.");
        setName("");
        setEmail("");
    }

    const location = useLocation();
    let path = getPath(location.pathname);

    function renderModule() {
        switch (path) {
            case "articles":
                return <Articles />;
            case "instilife":
                return <InstiLife />;
            case "spotlight":
                return <Spotlight />;
            case "academics":
                return <Academics />;
            case "scitech":
                return <SciTech />;
            case "opinion":
                return <Opinion />;
            case containsAnyDigit(path):
                return <Read />;
            default:
                return <NotFoundPage />;
        }
    }
    return (
        <>
            <Container
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    padding: "4px",
                }}
            >
                <div
                    style={{
                        padding: "10px",
                        height: "100%",
                        width: "100%",
                        borderRadius: "4px",
                    }}
                >
                    {message ? (
                        <Alert
                            onClose={() => {
                                setMessage();
                            }}
                        >
                            {message}
                        </Alert>
                    ) : (
                        <></>
                    )}

                    {renderModule()}
                </div>
                <VideoBar/>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "10px",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        value={email}
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone
                                        else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicName"
                                >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        value={name}
                                        type="text"
                                        placeholder="Name"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox"
                                >
                                    <Form.Check
                                        type="checkbox"
                                        label="By continuing, you accept the privacy policy"
                                    />
                                </Form.Group>
                                <Button
                                    variant="outlined"
                                    style={{
                                        color: "white",
                                        background: "brown",
                                        border: "none",
                                        width: "100%",
                                    }}
                                    type="submit"
                                >
                                    Subscribe
                                </Button>
                            </Form>
                        </CardContent>
                    </Card>
                    <PinnedSideBar />
                </div>
            </Container>
            <Container>
                <FooterMob />
            </Container>
        </>
    );
}
