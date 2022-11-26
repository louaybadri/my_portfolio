import './navbar.css'
import {useEffect, useState} from "react";
import generateText from "../../../Scripts/generateText";

function NavbarItem(props) {
    const [text, setText] = useState('***********')
    useEffect(() => {

        generateText(props.text, setText).then(r => null)
    }, [])
    return (
        <div className={"NavBarItem"}>

            <div className={'text'}>{`//01.<${text}/>`}</div>
            <div className={"onHover"}></div>
        </div>
    )
}

export default NavbarItem