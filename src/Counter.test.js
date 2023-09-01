import Counter from "./Counter";
import { render, fireEvent } from "@testing-library/react";

describe("Counter", () => {
  it("should start at zero", () => {
    const { queryByText } = render(<Counter />);
    const para = queryByText(/ah ah/);
    expect(para).toBeTruthy();
    expect(para.textContent).toBe("0 ah ah");
  });
  it("should increment on Click", () => {
    const { queryByText } = render(<Counter />);
    const para = queryByText(/ah ah/);
    fireEvent.click(para);
    expect(para.textContent).toBe("1 ah ah");
    fireEvent.click(para);
    expect(para.textContent).toBe("2 ah ah");
  });
});
