import { useState } from "react"
import LogInView from "../../views/LoginView"
import { useAuth } from "../../contexts/AuthContext";



const LogInContainer = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const handleEmail = (event : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onClick = () => {
        setEmail("")
        setPassword("")
    }

  return (
    <LogInView email={email} password={password} handleEmail={handleEmail} handlePassword={handlePassword} onClick={onClick}/>
  )
}

export default LogInContainer