import React from "react";
import { render, screen } from "@testing-library/react";

import PayrollPage from "../PayrollPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Payroll page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PayrollPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Payroll-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Payroll-add-button")).toBeInTheDocument();
});
