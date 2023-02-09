import React, { useState } from 'react';

import './App.css';
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';
import { Todo } from './model';


function App() {
  const [todo,setTodo]=useState('')
  const [todos,setTodos] = useState<Todo[]>([])

  const addhandler = (event:React.FormEvent)=>{
    event.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo('')
    }
  }
console.log(todos);
  return (
    <div className="App">
<span className='heading'>Taskify</span>
<InputFeild todo={todo} setTodo={setTodo} addHandler={addhandler}/>
<TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
