import React from "react";
import { render, screen } from "@testing-library/react";

import Time TrackingEditDialogComponent from "../Time TrackingEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Time Tracking edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Time TrackingEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Time Tracking-edit-dialog-component")).toBeInTheDocument();
});
