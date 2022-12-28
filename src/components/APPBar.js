import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { FIELDS, getPath } from "../store/helper";
import LogoBar from "./logobar";
import SearchBar from "./searchBox";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
        /* you can also use 'auto' behaviour
       in place of 'smooth' */
    });
};
export default function APPbar() {
    const location = useLocation();
    let path = getPath(location.pathname);

    return (
        <>
            <Navbar className="navbar" expand="lg">
                <Container>
                    <LogoBar />

                    <Navbar.Toggle
                        style={{ background: "white" }}
                        aria-controls="navbarScroll"
                    />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{
                                maxHeight: "100px",
                                marginRight: "1%",
                                marginLeft: "auto",
                            }}
                            navbarScroll
                        >
                            {FIELDS.map((fields) => (
                                <NavLink
                                    key={fields.name}
                                    onClick={() => scrollToTop()}
                                    style={
                                        fields.path.includes(path)
                                            ? {
                                                  fontSize: "18px",
                                                  fontWeight: "bold",
                                                  color: "black",
                                                  borderBottom:
                                                      "2px solid green",
                                              }
                                            : { color: "black" }
                                    }
                                    className="link"
                                    to={fields.path}
                                >
                                    {fields.name}
                                </NavLink>
                            ))}
                        </Nav>

                        <SearchBar />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
