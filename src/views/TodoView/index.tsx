import AddItemView from "../AddItemView"
import ListItemView from "../ListItemView"
import HeadingView from "../HeadingView";

export interface Todo {
  id : number;
  task: string;
  checked: boolean;
}

interface todoViewProps {
  inputValue : string;
  handleChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick : () => void;
  todoList: Todo[];
  deleteFunction : (id : number) => void;
  handleNavigate : () => void;
  handleTick : (id : number) => void;
}

const TodoView = ({inputValue , handleChange, handleClick, todoList, deleteFunction, handleNavigate, handleTick}: todoViewProps) => {
  return (
    <div data-testid="todo" className='bg-[#DFE2DB] w-2/5 p-4 rounded-md min-h-fit'>
      <HeadingView handleNavigate={handleNavigate}/>
      <AddItemView inputValue={inputValue} onChange={handleChange} onClick={handleClick} />
      <hr className='m-2 bg-[#161616] h-0.5' />
      {todoList.map((item, index) => {
          return <ListItemView key={index} task={item.task} onClick={deleteFunction} id={item.id} checked={item.checked} handleTick={handleTick}/>
      })}
    </div>
  )
}

export default TodoView