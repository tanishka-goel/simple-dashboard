import { render, screen } from "@testing-library/react";
import Search from "./Search";
import userEvent from "@testing-library/user-event";

describe("Search component", () => {
  test("test for search", () => {
    render(<Search onSearchChange={() => {}} />);

    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeInTheDocument();
  });

  test("test for input value typing",async()=>{
     render(<Search onSearchChange={() => {}} />);

    const input = screen.getByPlaceholderText("Search");
    await userEvent.type(input,"users")
    expect(input.value).toBe("users");

  })
});
