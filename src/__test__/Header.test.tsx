import { render, fireEvent, screen } from "@testing-library/react";
import { Header } from "../Components/Header";

test("Title is rendered", () => {
  render(<Header />);
  const textElement = screen.getByText("Welcome to Travel Advisor!");
  expect(textElement).toBeInTheDocument();
});
