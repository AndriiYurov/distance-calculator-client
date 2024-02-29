import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  it("if title present", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const title = screen.getByText(/Distance Calculator/i);
    expect(title).toBeInTheDocument();
  });

  it("is button disable", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const btn = screen.getByRole("button", { name: /Calculate Distance/i });
    expect(btn).toBeDisabled();
  });

  it("is button active and state changed", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByLabelText(/Source Adress/i), {
      target: { value: "New York" },
    });
    fireEvent.change(screen.getByLabelText(/Destination Address Adress/i), {
      target: { value: "New York" },
    });
    const btn = screen.getByRole("button", { name: /Calculate Distance/i });
    expect(btn).not.toBeDisabled();
  });

  it("is click redirect", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const btn = screen.getByRole("button", {
      name: /View Historical Queries/i,
    });
    fireEvent.click(btn);

    const btn2 = screen.getByRole("button", {
      name: /Back to Calculator/i,
    });
    expect(btn2).toBeInTheDocument();
  });
});
