import NavbarItem from "./navbarItem";
import IMG from "../../../Assets/me.jpg"

function NavBar() {
    return (<>
        <div className={"NavBar"}>
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