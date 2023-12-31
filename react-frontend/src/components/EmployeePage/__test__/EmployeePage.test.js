import React from "react";
import { render, screen } from "@testing-library/react";

import EmployeePage from "../EmployeePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Employee page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EmployeePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Employee-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Employee-add-button")).toBeInTheDocument();
});
