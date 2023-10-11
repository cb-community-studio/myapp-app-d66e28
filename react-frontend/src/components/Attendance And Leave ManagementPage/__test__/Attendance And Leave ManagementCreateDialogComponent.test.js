import React from "react";
import { render, screen } from "@testing-library/react";

import Attendance And Leave ManagementCreateDialogComponent from "../Attendance And Leave ManagementCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Attendance And Leave Management create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Attendance And Leave ManagementCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Attendance And Leave Management-create-dialog-component")).toBeInTheDocument();
});
