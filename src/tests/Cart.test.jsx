import { screen, render, getByTestId } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { RenderRouteWithOutletContext } from "./RenderRouteWithOutletContext";
import Cart from "../routes/Cart";

const mockEmptyCart = {
  cartContents: {
    quantity: 0,
    items: [],
    price: 0,
  },
};

const mockNotEmptyCart = {
  cartContents: {
    items: [
      {
        id: 1,
        title: "foo",
      },
    ],
    quantity: 1,
    price: 10,
  },
  formatPrice: vi.fn(),
};

const mockMultipleItemsCart = {
  cartContents: {
    items: [
      {
        id: 1,
        title: "foo",
      },
      {
        id: 1,
        title: "bar",
      },
      {
        id: 1,
        title: "foobar",
      },
    ],
    quantity: 3,
    price: 30,
  },
  formatPrice: vi.fn(),
};

describe("Cart Route", () => {
  it("Should show message and go shopping btn with an empty cart", () => {
    render(
      <RenderRouteWithOutletContext context={mockEmptyCart}>
        <Cart />
      </RenderRouteWithOutletContext>
    );

    expect(screen.getByRole("paragraph").textContent).toMatch(
      /looks like your cart is empty/i
    );

    expect(screen.getByText(/start shopping/i)).toBeInTheDocument();
  });

  it("Should not show message or go shopping btn when cart is not empty", () => {
    render(
      <RenderRouteWithOutletContext context={mockNotEmptyCart}>
        <Cart />
      </RenderRouteWithOutletContext>
    );

    expect(
      screen.queryByText(/looks like your cart is empty/)
    ).not.toBeInTheDocument();

    expect(screen.queryByText(/start shopping/i)).not.toBeInTheDocument();
  });

  it("Should render one product correctly", () => {
    render(
      <RenderRouteWithOutletContext context={mockNotEmptyCart}>
        <Cart />
      </RenderRouteWithOutletContext>
    );

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toEqual(1);
  });

  it("Should render multiple products correctly", () => {
    render(
      <RenderRouteWithOutletContext context={mockMultipleItemsCart}>
        <Cart />
      </RenderRouteWithOutletContext>
    );

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toEqual(3);
  });
});
