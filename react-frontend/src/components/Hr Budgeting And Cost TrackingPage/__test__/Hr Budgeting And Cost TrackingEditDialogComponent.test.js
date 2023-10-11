import React from "react";
import { render, screen } from "@testing-library/react";

import Hr Budgeting And Cost TrackingEditDialogComponent from "../Hr Budgeting And Cost TrackingEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Hr Budgeting And Cost Tracking edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Hr Budgeting And Cost TrackingEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Hr Budgeting And Cost Tracking-edit-dialog-component")).toBeInTheDocument();
});
