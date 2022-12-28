import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import SpotlightRead from "./spotlightRead";
import SpotlightWatch from "./spotlightWatch";

export default function Spotlight() {
    const [read, setRead] = useState(true);

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                }}
            >
                <NavLink
                    style={
                        read
                            ? {
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  borderBottom: "2px solid green",
                                  borderRadius: "0",
                                  fontWeight: "bold",
                              }
                            : {
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  borderRadius: "0",
                                  fontWeight: "bold",
                              }
                    }
                    onClick={() => {
                        setRead(true);
                    }}
                >
                    Spotlight Read
                </NavLink>
                <NavLink
                    style={
                        !read
                            ? {
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  borderBottom: "2px solid green",
                                  borderRadius: "0",
                                  fontWeight: "bold",
                              }
                            : {
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  borderRadius: "0",
                                  fontWeight: "bold",
                              }
                    }
                    onClick={() => {
                        setRead(false);
                    }}
                >
                    Spotlight Watch
                </NavLink>
            </div>
            {read ? (
                <SpotlightRead></SpotlightRead>
            ) : (
                <SpotlightWatch></SpotlightWatch>
            )}
        </>
    );
}
