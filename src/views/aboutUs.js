import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import { getSciTech } from "../service/api";
import APPbar from "../components/APPBar";

import "./aboutUs.css";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
        /* you can also use 'auto' behaviour
       in place of 'smooth' */
    });
};
const Style = { textDecoration: "none", color: "black" };
export default function Aboutus() {
    const [page, setPage] = useState(1);
    const params = {
        page: page,
    };
    const [data1, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            getSciTech(params, (res) => {
                setData(res);
            });
        };
        fetchData();
    }, [page]);
    const data = data1.results;

    if (data) {
        return (
            <>
            <APPbar />
            <p>HI</p>
            <br></br>
            <br></br>
                <div>
                
                        <div >
                            <header id="home" class="header">
                                
                                <div class="overlay"></div>
                                <div class="header-content container">
                                    <h1 class="header-title">
                                        <span class="up">About us:</span>
                                        <span class="down">Griffinsight</span>
                                    </h1>
                                    <p class="header-subtitle">The STUDENT MEDIA BODY</p>            

                                    {/* <button class="btn btn-primary">Visit My Works</button> */}
                                </div>              
                            </header>
                        </div>
                    <div class="cardcontainer">
                        <div class="logo logo-left">
                            <div class="fa fa-line-chart fa-4x"></div>
                        </div>
                        <p class="title title-left">STRATEGY</p>
                        <div class="text">
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugiat fuga architecto est impedit itaque velit, numquam cumque suscipit nesciunt fugit illo! Libero illum, enim aliquam repellendus aut molestias sint!</p>
                        </div>
                    </div>
                    <div class="cardcontainer">
                        <div class="logo logo-left">
                            <div class="fa fa-line-chart fa-4x"></div>
                        </div>
                        <p class="title title-left">AIM</p>
                        <div class="text">
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugiat fuga architecto est impedit itaque velit, numquam cumque suscipit nesciunt fugit illo! Libero illum, enim aliquam repellendus aut molestias sint!</p>
                        </div>
                    </div>
                    <div class="cardcontainer">
                        <div class="logo logo-left">
                            <div class="fa fa-line-chart fa-4x"></div>
                        </div>
                        <p class="title title-left">SOMETHING RANDOM</p>
                        <div class="text">
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugiat fuga architecto est impedit itaque velit, numquam cumque suscipit nesciunt fugit illo! Libero illum, enim aliquam repellendus aut molestias sint!</p>
                        </div>
                    </div>
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
