import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext =  React.createContext();

function TodoProvider ({ children }) {

    const {
        item: todos , 
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = useState('');
      const [openModal, setOpenModal] = useState(false);
    
      const completedTodos = todos.filter(todo => (!!todo.completed)).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter(todo => {
    
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        
        return todoText.includes(searchText);
      });

      const addTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.push({
          text,
          completed: false
        });
        saveTodos(newTodos);
      }
      
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => (text === todo.text));
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => (text === todo.text));
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }

    return(
        // En el value se pone todo lo que se desea exponer a la aplicacion
        // Cualquier componente children que este en el provider podra acceder a estas propiedades
        <TodoContext.Provider value={{
            completeTodo,
            deleteTodo,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completedTodos,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    );

}

export { TodoContext, TodoProvider };