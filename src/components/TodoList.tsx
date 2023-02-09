import { Todo } from '../model'
import './styles.css'
import SingleTodo from './SingleTodo'

interface Props {
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList : React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='container'>
        {todos.map((todo)=>{
            return(
                <SingleTodo todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}/>
            )
        })}
    </div>
  )
}

export default TodoList