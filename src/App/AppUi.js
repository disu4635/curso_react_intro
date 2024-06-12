import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Fragment } from 'react';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from "../TodoContext";   
import { useContext } from "react";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUi(){
  // ----------------------------------------------------------------------------------
  // FUNCIONAMIENTO DE LAS RENDER FUNCTIONS: 

  // El consumer necesita una funcion que retorne el contendio que se desea mostrar
  // Ese contenido podra acceder a las propiedades que lleguen esten en el provider
  // Para acceder a ellas , la funcion debe recibirlas como parametros
  // ----------------------------------------------------------------------------------
  // USO DE REACT CONTEXT:

  // Se crea un objeto llamando al hook y le pasamos nuestro contexto
  // Las propiedades del provider de ese contexto llegan o se las "llama" en el propio objeto creado
  // ----------------------------------------------------------------------------------
  
  const {
    completeTodo,
    deleteTodo,
    searchedTodos,
    loading,
    error,
    openModal,
    setOpenModal
  } = useContext(TodoContext)

  return(
    <Fragment>
      <header>
        <TodoCounter/>
        <TodoSearch/>
      </header>
      {loading && <TodosLoading/>}
      {error && <TodosError/>}
      {(!loading && searchedTodos.length === 0) && <EmptyTodos/>} 
      <main>
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton setOpenModal={setOpenModal} />
        {openModal && 
        <Modal>
          <TodoForm />
        </Modal>}
      </main>
    </Fragment>
  );
}

export { AppUi }