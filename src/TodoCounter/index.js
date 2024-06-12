import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import { useContext } from 'react';

function TodoCounter(){
    const {
      completedTodos,
      totalTodos
    } = useContext(TodoContext)

    if(totalTodos === 0){
      return(
        <h1 className='TodoCounter'>
          No tienes TODOs! ¿Por qué no pruebas agregar uno?
        </h1>
      );
    }

    return(
      completedTodos === totalTodos? 

      <h1 className='TodoCounter'>
        Completaste todos tus TODOs!!
      </h1>

      :

      <h1 className='TodoCounter'>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </h1>
    );
  }

export { TodoCounter }