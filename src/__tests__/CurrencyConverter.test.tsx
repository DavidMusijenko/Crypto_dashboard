import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CurrencyConverter from "../components/currencyConverter/CurrencyConverter";

test("renders Currency Converter header", () => {
  render(<CurrencyConverter />);
  const linkElement = screen.getByText(/Currency Converter/i);
  expect(linkElement).toBeInTheDocument();
});

/*

test("renders Currency Converter result", () => {
  render(<CurrencyConverter />);
  const textbox = screen.getByText(0);
  const button = screen.getByRole("button");
  // Simulate typing 2
  userEvent.type(textbox, 2);
  // Simulate clicking button
  userEvent.click(button);
  // Assert textbox has text content 2

  expect(textbox).toHaveValue(2);
});

*/
