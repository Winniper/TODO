import CustomButton from "../../components/base/CustomButton"
import InputField from "../../components/base/InputField"

interface addItemViewProps {
  inputValue : string;
  onChange: () => void;
  onClick: () => void;
}

const AddItemView = ({inputValue , onChange, onClick}:addItemViewProps) => {
  return (
    <div className="flex justify-evenly py-2">
      <InputField inputValue={inputValue} onChange={onChange} />
      <CustomButton variant="add" onClick={onClick}>Add Task</CustomButton>
    </div>
  )
}

export default AddItemView