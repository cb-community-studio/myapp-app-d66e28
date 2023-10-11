import React from "react";
import { render, screen } from "@testing-library/react";

import Hr Budgeting And Cost TrackingCreateDialogComponent from "../Hr Budgeting And Cost TrackingCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Hr Budgeting And Cost Tracking create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Hr Budgeting And Cost TrackingCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Hr Budgeting And Cost Tracking-create-dialog-component")).toBeInTheDocument();
});
