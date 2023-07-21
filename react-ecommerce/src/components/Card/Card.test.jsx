import { render, screen } from "@testing-library/react";
import Card from "./Card";
describe("Card Component", () => {
    it("shoud render correctly", () => {
        render(<Card />);
        expect(screen.getByTestId("card")).toBeInTheDocument();
    });
});
