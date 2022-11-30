import './App.css';
import NavBar from "./Components/Big Components/NavBar/NavBar";
import Home_screen from "./Screens/home_screen";
import {PageProvider} from "./Context/test"

function App() {

    return (
        <PageProvider>
            <div className="full-screen">
                <NavBar/>
                <div className={"header-text"}>
                    <Home_screen/>
                </div>
            </div>
        </PageProvider>
    );
}

export default App;
