import { fireEvent, render, screen } from "@testing-library/react"
import CheckBox from "."

describe("CheckBox tests", () => {

    it("The onClick function is call when clicked", () => {
        const handleClick = jest.fn()
        render(<CheckBox checked={false} onClick={handleClick}/>)

        const checkBoxElement = screen.getByRole('checkbox')
        fireEvent.click(checkBoxElement)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})