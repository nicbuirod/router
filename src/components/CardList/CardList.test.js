import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { CardList } from "./";
import { Context } from "../../context";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));
describe("<CardList/> test", () => {
  const list = [
    { id: 1, image: "image1.jpg", name: "Card 1" },
    { id: 2, image: "image2.jpg", name: "Card 2" },
  ];

  it("should render properly", () => {
    // Arrange
    render(
      <MemoryRouter>
        <CardList list={list} />
      </MemoryRouter>
    );

    // Act
    const cardElements = screen.getAllByTestId("card");

    // Assert
    expect(cardElements.length).toBe(list.length);

    list.forEach((item) => {
      const cardName = screen.getByText(item.name);
      expect(cardName).toBeInTheDocument();
    });
  });
  it("should handle click event properly", () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const contextMock = {
      redirectDetailsRoute: "/details",
    };
    render(
      <MemoryRouter>
        <Context.Provider value={contextMock}>
          <CardList list={list} />
        </Context.Provider>
      </MemoryRouter>
    );
    const card = screen.getAllByTestId("card")[0];
    fireEvent.click(card);
    expect(navigateMock).toHaveBeenCalledWith("/details/1");
  });
});
