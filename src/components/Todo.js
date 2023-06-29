import { useState } from 'react';
import './Todo.css';

function Todo() {
  const[item,setItem]=useState("");
  const[todos,setTodos]=useState([]);
  
  function handleSubmit(e){
    e.preventDefault()

    // setTodos(currentTodos=>{
    //   return[
    //     ...currentTodos,
    //     {id:crypto.randomUUID(),title: item,completed: false},
    //   ]
    // })
    // setItem("")
  }
  function todoadd(){
    setTodos(currentTodos=>{
      return[
        ...currentTodos,
        {id:crypto.randomUUID(),title: item,completed: false},
      ]
    })
    setItem("")
  }
  function toggelTodo(id,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id===id){
          return {...todo,completed}
        }
        return todo
      })
    })
  }
  function deletetodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!==id)
    })
  }
  return (
    <div>
     <form onSubmit={handleSubmit}className="new-item-form">
      <div className="form-row">
      <h1>New Item</h1>
      <input
      value={item} 
      onChange={e=>setItem(e.target.value)}
      type='text' 
      id='item'/>
      </div>
      </form> 
      <button className='btn' onClick={todoadd}>Add</button>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map(todo=>{
          return(
          <li key={todo.id}>
          <label >
            <input 
            type='checkbox'
             checked={todo.completed}
             onChange={e=>toggelTodo(todo.id,e.target.checked)}
            />
           {todo.title}
          </label>
          <button onClick={()=>deletetodo(todo.id)}className="btn-delete">Delete</button>
        </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Todo;
