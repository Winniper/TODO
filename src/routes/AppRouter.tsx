import { Route, Routes } from "react-router-dom"
import TodoPage from "../pages/TodoPage"
import SignUpPage from "../pages/SignUpPage"
import LogInPage from "../pages/LogInPage"

const AppRouter = () => {
  return (
        <Routes>
            <Route path="/" element={<TodoPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/login" element={<LogInPage/>}/>
        </Routes>
  )
}

export default AppRouter