import AddItemView from "../AddItemView"
import ListItemView from "../ListItemView"

export interface Todo {
  id : number;
  task: string;
  checked: boolean;
}

interface todoViewProps {
  inputValue : string;
  handleChange : () => void;
  handleClick : () => void;
  todoList: Todo[];
  deleteFunction : () => void;
}

const TodoView = ({inputValue , handleChange, handleClick, todoList, deleteFunction}: todoViewProps) => {
  return (
    <div className='bg-[#DFE2DB] w-2/5 p-4 rounded-md min-h-fit'>
      <span className='font-bold text-5xl '><span className='text-[#E31C25]'>TO</span>DO</span>
      <AddItemView inputValue={inputValue} onChange={handleChange} onClick={handleClick} />
      <hr className='m-2 bg-[#161616] h-0.5' />
      {todoList.map((item) => {
          return <ListItemView task={item.task} onClick={deleteFunction} id={item.id}/>
      })}
    </div>
  )
}

export default TodoView