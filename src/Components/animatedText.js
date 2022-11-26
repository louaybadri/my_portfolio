import {useEffect, useState} from "react";
import generateText from "../Scripts/generateText";

function AnimatedText(props) {
    const [text, setText] = useState('***********')
    useEffect(() => {

        generateText(props.name, setText).then(r => null)
    }, [])

    return (
        <>
            <div
                className="simple-char">{text}</div>
        </>
    );
}

export default AnimatedText