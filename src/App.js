//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [task,setTask]=useState("");
  const[todos,setTodos]=useState([]);

  const changeHandler=e=>{
    setTask(e.target.value)
  }

  const submitHandler=e=>{
    e.preventDefault();
    if (task.trim() === "") {
    alert("Please enter a valid task.");
    return;
  }
    const newTodos=[...todos,task];
    setTodos(newTodos);
    setTask('');
  }

  const deleteHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=>index !==  indexValue);
    setTodos(newTodos);

  }



  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Todo Management Application</h5>
            <form onSubmit={submitHandler}>
              <input size="30" type='text' name='task' value={task} placeholder='Enter Todo Task...' onChange={changeHandler}/>&nbsp;&nbsp;
              <input type='submit' value="Add" name='Add'/>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>

          </div>

        </div>

      
      </center>
      
    </div>
  );
}

export default App;
