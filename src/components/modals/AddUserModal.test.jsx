import { screen, render } from "@testing-library/react";
import { AddUserModal } from "./AddUserModal";
import userEvent from "@testing-library/user-event";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

const mockTheme = { theme: "light" };

jest.mock("../../queries/users.query", () => ({
  useAddUsers: () => ({
    mutate: jest.fn(),
  }),
}));

describe("Addition form validation", () => {
  test("validation error for empty form", async () => {
    render(
      <ThemeContext.Provider value={mockTheme}>
        <AddUserModal closeModal={() => {}} />
      </ThemeContext.Provider>,
    );

    const submit = screen.getByRole("button", {
      name: /submit/i,
    });
    await userEvent.click(submit);

    expect(
      await screen.findByText("Full name is required"),
    ).toBeInTheDocument();
  });
});
