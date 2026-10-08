import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, expect, it } from "vitest";

import { appRoutes } from "./routes";

describe("application routes", () => {
  it.each([
    ["/", "home"],
    ["/login", "login"],
    ["/register", "register"],
    ["/shop", "shop"],
  ])("renders the %s blank shell within the root layout at %s", (path, shellName) => {
    // Arrange
    const router = createMemoryRouter(appRoutes, { initialEntries: [path] });

    // Act
    const { container } = render(<RouterProvider router={router} />);

    // Assert
    expect(container).toBeEmptyDOMElement();
    expect(screen.queryByText(/no route matches url/i)).not.toBeInTheDocument();
  });
});
