import CustomButton from "../../components/base/CustomButton"
import { useAuth } from "../../contexts/AuthContext"

interface headingViewProps {
    handleNavigate : () => void;
}

const HeadingView = ({handleNavigate}:headingViewProps) => {
    const {isAuthenticated, logOut} = useAuth();
  return (
    <div className='flex justify-between'>
        <span className='font-bold text-5xl '><span className='text-[#E31C25]'>TO</span>DO</span>
        {isAuthenticated() ? <CustomButton variant="add" onClick={logOut}>LogOut</CustomButton> : <CustomButton variant="add" onClick={handleNavigate}>SignUp</CustomButton>}
    </div>
  )
}

export default HeadingView