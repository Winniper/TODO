import {fireEvent, render, screen} from "@testing-library/react"
import CustomButton from "./index"
import '@testing-library/jest-dom'

describe("CustomButton Componet", () => {
    test("Button renders with correct children", () => {
        render(<CustomButton variant="add">Add Task</CustomButton>)

        const buttonElement = screen.getByRole("button", {name : /add task/i})
        expect(buttonElement).toBeInTheDocument()
    })

    test('Applies the addtional class names from the props', () => {
        render(<CustomButton variant="add" className="new-class">Add Task</CustomButton>)

        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toHaveClass('new-class')
    })

    test('Calls the onClick when clicked',() =>{
        const handleClick = jest.fn()
        render(<CustomButton variant="add" onClick={handleClick}>Add Task</CustomButton>)

        const buttonElement = screen.getByRole("button")
        fireEvent.click(buttonElement)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})