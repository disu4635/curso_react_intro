import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }){
    return(
        // Al setOpenModal se le envia un arrow function que recibe el estado y retorna el contrario a este
        // Al parecer de esta forma es posible acceder al estado desde si funcion set
        <button className='CreateTodoButton' onClick={(event) =>(setOpenModal(state => !state))}>+</button>
    );
}

export { CreateTodoButton }