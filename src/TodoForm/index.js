import React from "react";
import "./TodoForm.css"
import { TodoContext } from "../TodoContext";
import { useLocalStorage } from "../TodoContext/useLocalStorage";

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return(
        <form onSubmit={onSubmit} >
            <label>Escribe tu nuevo TODO</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Hacer mis cursos de Platzi"
            ></textarea>
            <div className="TodoForm-buttonContainer" >
                <button 
                    type="button"
                    className="TodoForm-button 
                    TodoForm-button--cancelar" 
                    onClick={onCancel}
                >Cancelar</button>
                <button 
                    type="submit"
                    className="TodoForm-button 
                    TodoForm-button--añadir"
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm }