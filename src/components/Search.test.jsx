import { render, screen } from "@testing-library/react";
import Search from "./Search";
import userEvent from "@testing-library/user-event";
import { ThemeContext } from "../context/ThemeProvider";

const mockTheme = {theme:"light"}

describe("Search component", () => {
  test("test for search", () => {
    render(
    <ThemeContext.Provider value={mockTheme}>
      <Search onSearchChange={() => {}} />
    </ThemeContext.Provider>
    
  );

    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeInTheDocument();
  });

  test("test for input value typing",async()=>{
     render(
    <ThemeContext.Provider value={mockTheme}>
      <Search onSearchChange={() => {}} />
    </ThemeContext.Provider>
    );

    const input = screen.getByPlaceholderText("Search");
    await userEvent.type(input,"users")
    expect(input.value).toBe("users");

  })
});
