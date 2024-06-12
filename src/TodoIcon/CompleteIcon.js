import React from 'react'
import { TodoIcon } from '.';

function CompleteIcon({ completed, onComplete}){
    return(
        <TodoIcon 
            type = 'check'
            color = {completed? '#8888cc': 'gray'}
            onClick={onComplete}
        />
    );
}

export { CompleteIcon }