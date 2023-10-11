import React from "react";
import { render, screen } from "@testing-library/react";

import Hr Analytics And ReportingCreateDialogComponent from "../Hr Analytics And ReportingCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Hr Analytics And Reporting create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Hr Analytics And ReportingCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Hr Analytics And Reporting-create-dialog-component")).toBeInTheDocument();
});
