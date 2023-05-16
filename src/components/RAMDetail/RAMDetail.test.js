import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RAMDetail } from "./";

describe("<RAMDetail/>", () => {
  const ramData = {
    id: 1,
    species: "Human",
    gender: "Male",
    name: "John Doe",
    status: "Alive",
    image: "ram.jpg",
  };

  it("should render the RAM details correctly", () => {
    render(<RAMDetail {...ramData} />);

    const idElement = screen.getByText(ramData.id);
    expect(idElement).toBeInTheDocument();

    const speciesElement = screen.getByText(`${ramData.species}`);
    expect(speciesElement).toBeInTheDocument();

    const genderElement = screen.getByText(`${ramData.gender}`);
    expect(genderElement).toBeInTheDocument();

    const nameElement = screen.getByText(`${ramData.name}`);
    expect(nameElement).toBeInTheDocument();

    const statusElement = screen.getByText(`${ramData.status}`);
    expect(statusElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("");
    expect(imageElement).toHaveAttribute("src", ramData.image);
  });
});
