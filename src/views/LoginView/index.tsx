import InputField from "../../components/base/InputField"
import CustomButton from "../../components/base/CustomButton"

interface logInViewProps {
    email : string;
    password : string;
    handleEmail : () => void; 
    handlePassword : () => void;
    onClick : () => void;
}

const LogInView = ({email, password, handleEmail, handlePassword, onClick} : logInViewProps) => {
  return (
    <div className="bg-[#DFE2DB] w-2/5 p-4 rounded-md max-h-fit flex flex-col gap-9">
        <span className='font-bold text-5xl '><span className='text-[#E31C25]'>Log</span>In</span>
        <InputField type="text" placeholder="Email" inputValue={email} onChange={handleEmail}/>
        <InputField type="password" placeholder="Password" inputValue={password} onChange={handlePassword}/>
        <CustomButton variant="add" onClick={onClick}>LogIn</CustomButton>
    </div>
  )
}

export default LogInView