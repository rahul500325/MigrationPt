import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, expect, it } from "vitest";

import { App } from "./App";
import { HomePage, LoginPage, RegisterPage, ShopPage } from "./pages";

describe("App", () => {
  it("renders its nested route content", () => {
    // Arrange
    const router = createMemoryRouter(
      [
        {
          Component: App,
          children: [{ index: true, Component: () => <p>Nested route content</p> }],
        },
      ],
      { initialEntries: ["/"] },
    );

    // Act
    render(<RouterProvider router={router} />);

    // Assert
    expect(screen.getByText("Nested route content")).toBeInTheDocument();
  });
});

describe("page shells", () => {
  it.each([
    ["HomePage", HomePage],
    ["LoginPage", LoginPage],
    ["RegisterPage", RegisterPage],
    ["ShopPage", ShopPage],
  ])("renders %s without page content", (_name, Page) => {
    // Arrange

    // Act
    const { container } = render(<Page />);

    // Assert
    expect(container).toBeEmptyDOMElement();
  });
});
