import { getUsers } from "./user.api";
import BaseApi from "./base.api";

jest.mock("./base.api", () => ({
  get: jest.fn(),
  post: jest.fn(),
  delete: jest.fn(),
}));

describe("getUsers", () => {
  test("fetches user from api", async () => {
    const mu = [
      {
        id: 211,
        firstName: "Tanishka",
      },
    ];

    BaseApi.get.mockResolvedValue({
      data: {
        users: mu,
      },
    });

    const results = await getUsers();

    expect(BaseApi.get).toHaveBeenCalledWith(
      "/users"
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

  BaseApi.get.mockResolvedValue({
    data: {
      users: apiUsers,
    },
  });

  const results = await getUsers();

  expect(results).toEqual([
    ...localUsers,
    ...apiUsers,
    
  ]);
});

});