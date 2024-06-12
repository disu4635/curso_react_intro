import '.'

function TodoList(props){
    return(
        <div className='TodoListContainer' >
            <ul className='TodoList' >
                {props.children}
            </ul>
        </div>

    );
}

export { TodoList }