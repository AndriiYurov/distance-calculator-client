import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./context";

describe("App", () => {
  it("if title present", () => {
    render(
      <BrowserRouter>
        <StateProvider>
          <App />
        </StateProvider>
      </BrowserRouter>
    );
    const title = screen.getByText(/Distance Calculator/i);
    expect(title).toBeInTheDocument();
  });

  it("is button disable", () => {
    render(
      <BrowserRouter>
        <StateProvider>
          <App />
        </StateProvider>
      </BrowserRouter>
    );
    const btn = screen.getByRole("button", { name: /Calculate Distance/i });
    expect(btn).toBeDisabled();
  });

  it("is button active and state changed", () => {
    render(
      <BrowserRouter>
        <StateProvider>
          <App />
        </StateProvider>
      </BrowserRouter>
    );
    fireEvent.change(screen.getByLabelText(/Source Adress/i), {
      target: { value: "New York" },
    });
    fireEvent.change(screen.getByLabelText(/Destination Address/i), {
      target: { value: "New York" },
    });
    const btn = screen.getByRole("button", { name: /Calculate Distance/i });
    expect(btn).not.toBeDisabled();
  });

  it("is click redirect", async () => {
    render(
      <BrowserRouter>
        <StateProvider>
          <App />
        </StateProvider>
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
