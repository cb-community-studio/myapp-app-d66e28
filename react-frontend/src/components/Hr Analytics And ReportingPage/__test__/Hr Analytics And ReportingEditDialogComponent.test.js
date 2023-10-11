import React from "react";
import { render, screen } from "@testing-library/react";

import Hr Analytics And ReportingEditDialogComponent from "../Hr Analytics And ReportingEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Hr Analytics And Reporting edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Hr Analytics And ReportingEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Hr Analytics And Reporting-edit-dialog-component")).toBeInTheDocument();
});
