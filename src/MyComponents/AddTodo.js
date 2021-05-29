import React, { useState } from 'react'; 

export const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e) =>{
        e.preventDefault(); //prevents refresh
        if(!title || !desc){
            alert("Title or Description cannot be blank. ");
        }
        else{
            props.addTodo(title, desc);
            settitle("");
            setdesc("");

        }
        
    }
    return (
        <div className = "container my-3">
            <h3>Add a To Do</h3>
            <form onSubmit = {submit}>
            <div class="mb-3">
                <label htmlFor="title" className="form-label">To Do Title</label>
                <input type="text" value = {title} onChange = {(e)=>{settitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
                <div class="mb-3">
                    <label htmlFor="desc" class="form-label">To Do Description</label>
                    <input type="text" value = {desc}  onChange = {(e)=>{setdesc(e.target.value)}} class="form-control" id="desc"/>
                 </div>
                        <button type="submit" class="btn btn-success btn-sm">Add To Do</button>
        </form>

        </div>
        
    )
}
