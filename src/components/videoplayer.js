import React from "react";
import ReactPlayer from "react-player";

export default function VideoBar()
{
    const width="20rem";
    const height="20rem";
    return (
        <div  style={{ display: "flex", justifyContent: "center", flexWrap:"wrap"}}>
                    <div style={{padding:"1rem", justifyContent: "center"}}>
                        <ReactPlayer
                            width={width}
                            height={height}
                            url="https://www.youtube.com/watch?v=LFx_d2d3ZH4"
                            controls={true}
                        />
                    </div>
                    <div style={{padding:"1rem", justifyContent: "center"}}>
                    <ReactPlayer
                        width={width}
                        height={height}
                        url="https://www.youtube.com/watch?v=uhCMDQvpWbg"
                        controls={true}
                    />
                    </div>
                </div>
    );
};