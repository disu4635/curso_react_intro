import { useState } from "react";
import { useEffect } from "react";

function useLocalStorage(itemName, initialValue){

  // localStorage.removeItem('TODOS_V1')
  // const defaultTodos = [
  //   { text: 'Sacar Cita', completed: false },
  //   { text: 'Hacer cursitos :3', completed: false },
  //   { text: 'Pasarse el Monster Hunter', completed: true },
  //   { text: 'Salir a comer', completed: true }
  // ];

  // localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

  const [item, setItem] = useState(initialValue);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(() => {
    try{
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
  
      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      }else{
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }
  
      setLoading(false);
    }
    catch(e){
      setError(true);
      setLoading(false);
    }
  }, []);
  
  const saveItem = (newItem) => {
    setItem(newItem)
    localStorage.setItem(itemName, JSON.stringify(newItem))
  };

  return {
    item, 
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage,  }