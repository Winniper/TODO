import { useState } from "react"
import SignUpView from "../../views/SignUpView"
import { useAuth } from "../../contexts/AuthContext"



const SignUpContainer = () => {
    const {signUp} = useAuth()
    const [email, setEmail] = useState("")
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

        signUp(email , password)
    }

  return (
    <SignUpView email={email} password={password} handleEmail={handleEmail} handlePassword={handlePassword} onClick={onClick}/>
  )
}

export default SignUpContainer