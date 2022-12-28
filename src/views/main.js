import React from "react";
import ScrollButton from "../components/scrollButton";
import DesktopMain from "./desktopmain";
import MobileMain from "./mobilemain";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: window.matchMedia("(min-width: 768px)").matches,
        };
    }

    componentDidMount() {
        const handler = (e) => this.setState({ matches: e.matches });
        window
            .matchMedia("(min-width: 1000px)")
            .addEventListener("change", handler);
    }
    render() {
        return (
            <div style={{ marginTop: "120px", borderRadius: "10px" }}>
                {this.state.matches && <DesktopMain />}
                {!this.state.matches && <MobileMain />}

                <ScrollButton />
            </div>
        );
    }
}

export default Main;
