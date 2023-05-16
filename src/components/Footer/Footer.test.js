import { render, screen, fireEvent } from "@testing-library/react";
import { Footer } from "./";

describe("<Footer/> test", () => {
  const props = {
    children: "Footer",
  };
  it("should render properly", () => {
    render(<Footer {...props} />);
    const text = screen.getByText("Footer");
    expect(text).toBeInTheDocument();
  });
});
