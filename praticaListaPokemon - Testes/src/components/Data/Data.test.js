import { render, screen } from "@testing-library/react";
import Data from "./Data.jsx";

const mockedItem = {
  id: 1,
  name: "bulbasaur",
  sprites: {
    other: {
      "official-artwork": {
        front_default: "",
      },
    },
  },
};

describe("Data Component", () => {
  it("should render correctly", () => {
    render(<Data item={mockedItem} />);
    expect(screen.getByTestId("list-item-1")).toBeInTheDocument();
  });
});
