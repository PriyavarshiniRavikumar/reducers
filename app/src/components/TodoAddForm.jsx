// JavaScript source code
import { useState } from "react";

const TodoAddForm = ({ handleAdd }) => {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        handleAdd(text);
        setText("");
    }
