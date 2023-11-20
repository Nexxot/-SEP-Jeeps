import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

import ResizeObserver from "resize-observer-polyfill";
global.ResizeObserver = ResizeObserver;

describe("App component", () => {
  test("startscreen renders with all components", () => {
    render(<App />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("UPDATE VIEW")).toBeInTheDocument();
    expect(screen.getByText("EXPORT")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /process timeline/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /process view/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /process timeline/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("process-map-id")).toBeInTheDocument();
    expect(screen.getByTestId('accordion-test-id')).toBeInTheDocument();
    //TODO
    // expect(screen.getByTestId("meta-daten-test-id")).toBeInTheDocument();
  });


  //TODO change state and show the process timeline
  test("startscreen renders with all components", () => {
    render(<App />);

    // Trigger the switch to the timeline view
    fireEvent.click(screen.getByRole("button", { name: /process timeline/i }));

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("UPDATE VIEW")).toBeInTheDocument();
    expect(screen.getByText("EXPORT")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /process timeline/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /process view/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("process-timeline-id")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-test-id")).toBeInTheDocument();
    // TODO: Add assertions for the timeline view components
    // expect(screen.getByTestId("meta-daten-test-id")).toBeInTheDocument();
  });
});
