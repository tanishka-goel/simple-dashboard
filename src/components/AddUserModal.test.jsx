import { screen, render } from "@testing-library/react";
import { AddUserModal } from "./AddUserModal";
import userEvent from "@testing-library/user-event";
// import { useAddUsers } from "../queries/users.query";
// import { useAddUsers } from "../queries/users.query";

jest.mock("../queries/users.query", () => ({
  useAddUsers: () => ({
    mutate: jest.fn(),
  }),
}));

describe("Addition form validation", () => {
  test("validation error for empty form", async () => {
    render(<AddUserModal closeModal={() => {}} />);

    const submit = screen.getByRole("button", {
      name: /submit/i,
    });
    await userEvent.click(submit);

    expect(
      await screen.findByText("Full name is required")
    ).toBeInTheDocument();
  });
});
