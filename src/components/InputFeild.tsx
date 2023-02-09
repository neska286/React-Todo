
import { useRef } from 'react'
import './styles.css'

interface Props {
    todo : string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    addHandler: (event : React.FormEvent)=>void
}

const InputFeild : React.FC<Props> = ({todo,setTodo,addHandler}) => {
    const inputRef = useRef<HTMLInputElement>(null);


  return (
    <form className="input" onSubmit={(event)=>{addHandler(event);
    inputRef.current?.blur()}}
    >
        <input type='text'
         value={todo} 
         onChange={(e)=>{setTodo(e.target.value)}}
         placeholder="Enter a task"
         className="input__box"/>
         <button className="input__submit"
         type="submit">Go</button>
    </form>
  )
}

export default InputFeild