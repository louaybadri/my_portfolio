import './App.css';
import NavBar from "./Components/Big Components/NavBar/NavBar";
import Home_screen from "./Screens/home_screen";


function App
() {

    return (
        <div className="full-screen">
            <NavBar/>
            <div className={"header-text"}>
                <Home_screen/>
            </div>
        </div>
    );
}

export default App;
