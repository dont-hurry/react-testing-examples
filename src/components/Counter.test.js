import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Before clicking the button", () => {
  test("the value of counter is 0", () => {
    render(<Counter />);

    const element = screen.getByText("Counter: 0");
    expect(element).toBeInTheDocument();
  });
});

describe("After clicking the button once", () => {
  test("the value of counter is 1", () => {
    render(<Counter />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const element = screen.getByText("Counter: 1");
    expect(element).toBeInTheDocument();
  });
});
