import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import APPbar from "./components/APPBar";
import Main from "./views/main";

function App() {
    return (
        <>
            <APPbar />
            <Main />
        </>
    );
}

export default App;
