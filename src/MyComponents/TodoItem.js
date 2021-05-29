import React from 'react'
//written using rafc.. arrow function
export const TodoItem = (props) => {
    return (
        <div>
            <h4>{props.arrtodoitem.title}</h4>
            <p>{props.arrtodoitem.desc}</p>
            <button className="btn btn-sm btn-danger" onClick = {() => {props.onDelete(props.arrtodoitem)}}>Delete</button> 

              {/* I had to use arrow function above in onClick because previously when the code looked like this :
             onClick = {props.onDelete(props.arrtodoitem)} all of the delete buttons would get pressed and called at the time
             of rendering.  */}

        </div>
    )
}
