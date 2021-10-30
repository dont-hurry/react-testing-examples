import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders `Text rendered by the App component`", () => {
  render(<App />);

  const element = screen.getByText("Text rendered by the App component");
  expect(element).toBeInTheDocument();
});

test("renders `Text rendered by the ChildComponent`", () => {
  render(<App />);

  const element = screen.getByText("Text rendered by the ChildComponent");
  expect(element).toBeInTheDocument();
});
