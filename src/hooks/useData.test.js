import React from "react";
import { render, waitFor } from "@testing-library/react";
import { useData } from "./";

describe("useData test", () => {
  const params = {
    initialState: [],
    fn: jest.fn(),
  };
  const MockComponent = () => {
    useData(params.initialState, params.fn);
    return <h1>Mock component</h1>;
  };

  it("should works properly with a function parameter", async () => {
    render(<MockComponent />);

    await waitFor(() => {
      // eslint-disable-next-line no-unreachable
      expect(params.fn).toHaveBeenCalled();
    });
  });

  //esta forma cuando son elementos puede ayudar cuando el error esta en usestate
  //   const setStateMock = jest.fn();
  //   const useStateMock = (initialState) => [initialState, setStateMock];
  //   const spy = jest.spyOn(React, "useState").mockImplementation(useStateMock);
});
