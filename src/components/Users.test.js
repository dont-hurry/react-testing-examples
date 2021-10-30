import { render, screen } from "@testing-library/react";
import Users from "./Users";

test("renders a list of users if the request succeeds", async () => {
  // Create a mock function
  // API documentation: https://jestjs.io/docs/mock-function-api
  globalThis.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ id: 1, name: "Leanne Graham" }]),
    })
  );

  render(<Users />);

  const elements = await screen.findAllByRole("listitem");
  expect(elements).not.toHaveLength(0);
});
