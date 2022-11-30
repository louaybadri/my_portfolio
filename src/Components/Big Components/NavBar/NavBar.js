import NavbarItem from "./navbarItem";
import IMG from "../../../Assets/me.jpg"
import {useContext} from "react";
import {PagesContext} from "../../../Context/test";

function NavBar() {

    const [page, setPage] = useContext(PagesContext)
    return (<>
        <div onClick={
            () => {
                setPage(!page);
                console.log(page)
            }

        } className={"NavBar"}>
            <div>
                <NavbarItem text={"Home"}/>
                <NavbarItem text={"Projects"}/>
            </div>
            <div>
                <NavbarItem text={"Contact"}/>
                <NavbarItem text={"CV"}/>
            </div>
        </div>
    </>)
}

export default NavBar