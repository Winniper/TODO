import { Route, Routes } from "react-router-dom"
import TodoPage from "../pages/TodoPage"
import SignUpPage from "../pages/SignUpPage"

const AppRouter = () => {
  return (
        <Routes>
            <Route path="/" element={<TodoPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
        </Routes>
  )
}

export default AppRouter