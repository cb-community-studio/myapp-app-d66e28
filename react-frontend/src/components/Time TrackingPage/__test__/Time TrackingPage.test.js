import React from "react";
import { render, screen } from "@testing-library/react";

import Time TrackingPage from "../Time TrackingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Time Tracking page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Time TrackingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Time Tracking-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Time Tracking-add-button")).toBeInTheDocument();
});
