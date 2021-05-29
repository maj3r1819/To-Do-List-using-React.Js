import React from 'react'
//written using rafc.. arrow function

import {TodoItem} from "./TodoItem";//rafc

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className =  "my-3">To Do List</h3>
            {props.arrtodos.length===0? "To Do list is empty. ": 
            props.arrtodos.map((arrtodo)=>{
                return(
                    <>
                    <TodoItem arrtodoitem = {arrtodo}  onDelete = {props.onDelete}/> <hr/>
                    
                    </>
                )

            }

            )
        }
            
            
            
        </div>
    )
}
