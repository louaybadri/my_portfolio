import "./home_screen.css"
import {useContext, useState} from "react";
import {PagesContext} from "../Context/test";

function HomeScreen() {

    const [page, setPage] = useContext(PagesContext)
    return (
        <div className={"home-container".concat(page ? " fade-in" : " fade-out")}>
            <div className={"presentation"}>

                <div className={"header-text"}>
                    <h4>{"<p>"}</h4>
                    <h2>{"This is"}</h2>
                    <h4>{"</p>"}</h4>
                </div>
                <div className={"me-text"}>
                    <h3>{"<p>"}</h3>
                    <h1>{"Louay Badri"}</h1>
                    {/*<h1>{" "}</h1>*/}
                    <h3>{"</p>"}</h3>
                </div>

                <div className={"header-text header-text2"}>
                    <h4>{"<p>"}</h4>
                    <h2>{"Software Engineer"}</h2>
                    <h4>{"</p>"}</h4>
                </div>
                <div className="background2">
                    {"<More ... />"}
                </div>
            </div>
            <div className="cv">

                <div className="text">
                    {"<Download CV/>"}
                </div>

                <div className="border border-1"></div>
                <div className="border border-2"></div>
                <div className="border border-3"></div>
                <div className="circle"></div>
                {/*<div className="border-1"></div>*/}
                <div className="background">
                    {"<\\>"}
                </div>
            </div>
        </div>)
}

export default HomeScreen