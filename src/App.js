import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"; //rfc
import { Footer } from "./MyComponents/Footer";//rafc
import { Todos } from "./MyComponents/Todos"; //rafc
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react'; // For to do list
import {About} from './MyComponents/About'
// for single page application 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (arrlist) => {
    // console.log("Deleted", arrlist);
    // deleting the normal way like i did in the notes app will not Work
    // so i will have to use a new method

    setTodos(todos.filter((e) => {
      return e !== arrlist;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);




  }

  const [todos, setTodos] = useState(initTodo,

    [
      // {
      //   sno: 1,
      //   title: "Go to the Market",
      //   desc: "Go to the market to get a print out"

      // },
      // {
      //   sno: 2,
      //   title: "Practice Leetcode",
      //   desc: "Dont forget to keep practicing Leetcode today"

      // },
      // {
      //   sno: 3,
      //   title: "Practice Javascript",
      //   desc: "Practice js to learn react.js"

      // },
      // {
      //   sno: 3,
      //   title: "Practice Javascript",
      //   desc: "Practice js to learn react.js"

      // }
    ]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])                         // when someone changes(appends, deletes todos)==> call the useEffect method !

  return (
    <>
      <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
             <AddTodo addTodo={addTodo} />
             <Todos arrtodos={todos} onDelete={onDelete} />
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}
export default App;


