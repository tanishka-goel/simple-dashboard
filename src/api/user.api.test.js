import axios from "axios";
import { getUsers } from "./user.api";

jest.mock("axios");

describe("getUsers", () => {
  test("fetches user from api", async () => {
    const mu = [
      {
        id: 211,
        firstName: "Tanishka",
      },
    ];

    axios.get.mockResolvedValue({
      data: {
        users: mu,
      },
    });

    const results = await getUsers();

    expect(axios.get).toHaveBeenCalledWith(
      "https://dummyjson.com/users"
    );

    expect(results).toEqual(mu);
  });


 test("merges api users with localStorage users", async () => {
  const apiUsers = [
    {
      id: 1,
      firstName: "John",
    },
  ];

  const localUsers = [
    {
      id: 2,
      firstName: "Tanishka",
    },
  ];

  localStorage.setItem(
    "addedUsers",
    JSON.stringify(localUsers)
  );

  axios.get.mockResolvedValue({
    data: {
      users: apiUsers,
    },
  });

  const results = await getUsers();

  expect(results).toEqual([
    ...apiUsers,
    ...localUsers,
  ]);
});

});