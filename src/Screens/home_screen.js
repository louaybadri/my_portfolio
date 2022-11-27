import "./home_screen.css"

function HomeScreen() {
    return (
        <div className={"home-container"}>
            <div className={"presentation"}>
                <div className={"header-text"}>
                    <h4>{"<p>"}</h4>
                    <h2>{"This is"}</h2>
                    <h4>{"</p>"}</h4>
                </div>
                <div className={"me-text"}>
                    <h3>{"<p>"}</h3>
                    <h1>{"Louay"}</h1>
                    <h1>{" Badri"}</h1>
                    <h3>{"</p>"}</h3>
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