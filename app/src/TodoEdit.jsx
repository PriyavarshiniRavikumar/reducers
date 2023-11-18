import {useState} from "react";
function TodoEdit({ todo, onSave }) {
  const [editText, seteditText] = useState(todo.text);
  function handleEditSubmit(e) {
    e.preventDefault();
    onSave(editText);
  }