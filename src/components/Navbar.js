import React,{useContext} from "react";
import {BookContext} from "../context/BookContext";

const Navbar    = () => {
    const {books} = useContext(BookContext);
    return(
        <div className="navbar">
            <h1>Kitaplığımızda {books.length} kitap var.</h1>
        </div>
    )
}

export default Navbar;