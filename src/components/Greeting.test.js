import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World as text", () => {
    render(<Greeting />);

    const hwElement = screen.getByText("hello, world", { exact: false });
    expect(hwElement).toBeInTheDocument();
  });

  test("renders text when !changedText", () => {
    render(<Greeting />);
    const defaultText = screen.getByText("It's good to see you.");
    expect(defaultText).toBeInTheDocument();
  });

  test("renders new text if changedText", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const changedText = screen.getByText("changed", { exact: false });
    expect(changedText).toBeInTheDocument();
  });

  test("does not render default text if changedText", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const defaultText = screen.queryByText("good to see you", { exact: false });
    expect(defaultText).toBeNull();
  });
});
