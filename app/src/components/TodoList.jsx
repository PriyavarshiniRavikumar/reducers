// JavaScript source code
import TodoEdit from "./TodoEdit";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TodoList = ({
    todos,
    handleDelete,
    handleDone,
    handleUpdate,
    handleEditing,
    dragUpdate,
}) => {
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    const handleSort = () => {
        let newTodos = [...todos];
        // const dragItemContent = newTodos.splice(dragItem.current, 1)[0];

        // newTodos.splice(dragOverItem.current, 0, dragItemContent);
        // dragUpdate(newTodos);
        dragUpdate(dragItem.current, dragOverItem.current);
    };
