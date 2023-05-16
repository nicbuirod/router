import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./";

describe("<Header/> test", () => {
  const props = {
    children: "Header",
  };
  it("should render properly", () => {
    render(<Header {...props} />);
    const text = screen.getByText("Header");
    expect(text).toBeInTheDocument();
  });
});
