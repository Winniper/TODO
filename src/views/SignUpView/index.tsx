import InputField from "../../components/base/InputField"
import CustomButton from "../../components/base/CustomButton"

interface SignUpViewProps {
    email : string;
    password : string;
    handleEmail : () => void; 
    handlePassword : () => void;
    onClick : () => void;
}

const SignUpView = ({email, password, handleEmail, handlePassword, onClick} : SignUpViewProps) => {
  return (
    <div className="bg-[#DFE2DB] w-2/5 p-4 rounded-md max-h-fit flex flex-col gap-9">
        <span className='font-bold text-5xl '><span className='text-[#E31C25]'>Sign</span>Up</span>
        <InputField type="text" placeholder="Email" inputValue={email} onChange={handleEmail}/>
        <InputField type="password" placeholder="Password" inputValue={password} onChange={handlePassword}/>
        <CustomButton variant="add" onClick={onClick}>SignUp</CustomButton>
    </div>
  )
}

export default SignUpView