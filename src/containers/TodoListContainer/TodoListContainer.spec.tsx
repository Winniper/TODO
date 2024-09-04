import {render, screen, fireEvent} from "@testing-library/react"
import '@testing-library/jest-dom'
import { MemoryRouter as Router } from "react-router-dom"
import TodoListContainer from "."
import AuthProvider from "../../contexts/AuthContext"


describe('TodoListContainter Test', () => {
    const AuthTodoContaier = () => {
        return(
            <AuthProvider>
                <TodoListContainer />
            </AuthProvider>
        )
    }

    beforeEach(() => {
        localStorage.removeItem("todos");
    })

    it("adds a todo Item", () => {
        render(
        <Router>    
            <AuthTodoContaier/>
        </Router>
        )

        const inputElement = screen.getByPlaceholderText(/Enter Task/i)
        const buttonElement = screen.getByText(/Add Task/i)

        fireEvent.change(inputElement,{target:{value:"New Task"}})
        fireEvent.click(buttonElement)

        expect(screen.getByText(/new task/i)).toBeInTheDocument()
    })

    it("Doesn't add blank a todo Item", () => {
        render(
        <Router>    
            <AuthTodoContaier/>
        </Router>
        )

        const initialTodo = screen.queryAllByTestId("todo")

        const inputElement = screen.getByPlaceholderText(/Enter Task/i)
        const buttonElement = screen.getByText(/Add Task/i)

        fireEvent.change(inputElement,{target:{value:" "}})
        fireEvent.click(buttonElement)

        const updatedTodo = screen.queryAllByTestId("todo")
        expect(updatedTodo.length).toBe(initialTodo.length);
    })

    it("Deletes the item from todo",() => {
        render(
        <Router>    
            <AuthTodoContaier/>
        </Router>
        )

        const inputElement = screen.getByPlaceholderText(/Enter Task/i)
        const addButton = screen.getByText(/Add Task/i)

        fireEvent.change(inputElement,{target:{value:"New Task"}})
        fireEvent.click(addButton)

        const deleteButton = screen.getByText(/delete/i)
        fireEvent.click(deleteButton)

        expect(screen.queryByText(/New Task/i)).not.toBeInTheDocument()
    })


    it("Toggles todo item",() => {
        render(
            <Router>    
                <AuthTodoContaier/>
            </Router>
        )
        
        const inputElement = screen.getByPlaceholderText(/Enter Task/i)
        const buttonElement = screen.getByText(/Add Task/i)

        fireEvent.change(inputElement,{target:{value:"New Task"}})
        fireEvent.click(buttonElement)
        
        const checkbox = screen.getByRole("checkbox")
        expect(checkbox).not.toBeChecked()

        fireEvent.click(checkbox)
        expect(checkbox).toBeChecked()
    })

    it("Navigates to the right todo",() => {
        render(
            <Router>    
                <AuthTodoContaier/>
            </Router>
        )
        
        const buttonElement = screen.getByText(/SignUp/i)
        fireEvent.click(buttonElement)

        expect(screen.getByText(/SignUp/i)).toBeInTheDocument()
    })
})