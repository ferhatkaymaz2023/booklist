import React,{useContext} from "react";
import {BookContext} from "../context/BookContext";

const BookDetail = ({book}) => {
    const {dispatch} = useContext(BookContext);
    return(
        <li onClick={() => dispatch({type:"REMOVE_BOOK",id:book.id})}>
            {book.title} - {book.author}
        </li>
    )
}

export default BookDetail;