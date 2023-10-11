import React from "react";
import { render, screen } from "@testing-library/react";

import Attendance And Leave ManagementPage from "../Attendance And Leave ManagementPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Attendance And Leave Management page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Attendance And Leave ManagementPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Attendance And Leave Management-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Attendance And Leave Management-add-button")).toBeInTheDocument();
});
