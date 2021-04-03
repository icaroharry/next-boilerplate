import { render, screen } from "@testing-library/react";
import Main from ".";

describe("<Main />", () => {
  it("should render the heading", () => {
    const { container } = render(<Main />);
    expect(
      screen.getByRole("heading", { name: /NextJS Boilerplate/ })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render styles correctly", () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({
      "background-color": "#06092b",
    });
  });
});
