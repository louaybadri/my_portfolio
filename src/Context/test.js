import {createContext, useState} from "react";

export const PagesContext = createContext([])
export const PageProvider = (props) => {
    const [page, setPage] = useState(false)
    return (
        <PagesContext.Provider value={[page, setPage]}>
            {props.children}
        </PagesContext.Provider>
    )
}
