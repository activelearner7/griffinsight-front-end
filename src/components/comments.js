import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getComment, postComment } from "../service/api";
import { getPath } from "../store/helper";

export default function Comment() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [profile, setProfile] = useState("");
    const [count, setCount] = useState("");
    const location = useLocation();
    const path = getPath(location.pathname);
    const [comment, setComment] = useState(0);
    useEffect(async () => {
        getComment(path, (res) => {
            setComment(res);
        });
    }, [count]);

    function handleSubmit(e) {
        e.preventDefault();
        const params = {
            name: e.target[2].value,
            email: e.target[1].value,
            message: e.target[0].value,
            profile: e.target[3].value,
            article: path,
        };

        postComment(params, (res) => {
            setCount(count + 1);
        });
        setMessage("");
        setName("");
        setEmail("");
        setProfile("");
    }
    return (
        <>
            <h1>Comments</h1>
            <div style={{ marginLeft: "10px" }}>
                <div>
                    {comment.length ? (
                        <>
                            {comment.map((item) => (
                                <>
                                    <div
                                        style={{
                                            borderRadius: "4px",
                                            marginBottom: "10px",
                                            background: "#E8E8E8",
                                        }}
                                    >
                                        <div style={{ marginBottom: "0" }}>
                                            <AccountCircleIcon
                                                style={{ marginRight: "10px" }}
                                            />
                                            {item.profile ? (
                                                <>
                                                    {" "}
                                                    <a
                                                        href={item.profile}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <strong>
                                                            {item.name}
                                                        </strong>
                                                    </a>{" "}
                                                </>
                                            ) : (
                                                <>
                                                    <strong>{item.name}</strong>
                                                </>
                                            )}
                                        </div>
                                        <div style={{ marginLeft: "50px" }}>
                                            {item.message}
                                        </div>
                                    </div>
                                </>
                            ))}
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>

            <h4>Write a Comment</h4>
            <p className="text-muted">
                {" "}
                <i>
                    Your email address will not be published. Required fields
                    are marked *
                </i>{" "}
            </p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        style={{ height: "100px" }}
                        type="text"
                        placeholder="*Message"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="*Email"
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="*Name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfile">
                    <Form.Label>Profile</Form.Label>
                    <Form.Control
                        onChange={(e) => setProfile(e.target.value)}
                        value={profile}
                        type="text"
                        placeholder="Social media link"
                    />
                </Form.Group>

                <Button
                    style={{
                        color: "white",
                        border: "none",
                        background: "brown ",
                    }}
                    type="submit"
                >
                    Post Comment
                </Button>
            </Form>
        </>
    );
}
