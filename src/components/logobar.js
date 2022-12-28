import React from "react";
import { Link } from "react-router-dom";
import blogo from "../Assets/griffinsight_logo.png";
const Style = { textDecoration: "none", color: "black" };
export default function LogoBar() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <Link to={`/`} style={Style}>
                    <img
                        src={blogo}
                        height="50px"
                        width="50px"
                        alt=""
                        srcSet=""
                    />
                </Link>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        fontFamily: "'Cinzel Decorative', cursive",
                    }}
                >
                    <Link to={`/`} style={Style}>
                        <h4 style={{ paddingTop: "20px", marginBottom: "0" }}>
                            Griffinsight
                        </h4>
                    </Link>
                    <p
                        style={{
                            fontFamily: "'Quicksand', sans-serif",
                            color: "brown",
                            fontSize: "8px",
                            fontWeight: "1000",
                            marginLeft: "4px",
                        }}
                    >
                        THE OFFICIAL STUDENT MEDIA BODY OF IIT MANDI
                    </p>
                </div>
            </div>
        </>
    );
}
