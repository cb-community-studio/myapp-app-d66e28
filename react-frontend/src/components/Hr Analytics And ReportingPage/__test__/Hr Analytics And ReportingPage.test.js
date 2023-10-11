import React from "react";
import { render, screen } from "@testing-library/react";

import Hr Analytics And ReportingPage from "../Hr Analytics And ReportingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Hr Analytics And Reporting page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Hr Analytics And ReportingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Hr Analytics And Reporting-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Hr Analytics And Reporting-add-button")).toBeInTheDocument();
});
