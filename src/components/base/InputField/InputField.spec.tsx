import { fireEvent, render, screen} from "@testing-library/react"
import InputField from "."

describe("Input Component Tests",() => {
    it("Calls the onChange function when the input value changes", () => {
        const handleChange = jest.fn()
        render(<InputField
        type="text"
        placeholder="Enter here"
        inputValue=""
        onChange={handleChange}
        />)

        const inputElement = screen.getByPlaceholderText(/enter here/i)
        fireEvent.change(inputElement,{target:{value:"Name"}})
        expect(handleChange).toHaveBeenCalledTimes(1)
    })
})