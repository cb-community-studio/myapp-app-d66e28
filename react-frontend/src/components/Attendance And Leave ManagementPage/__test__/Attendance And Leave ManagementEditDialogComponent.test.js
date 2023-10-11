import React from "react";
import { render, screen } from "@testing-library/react";

import Attendance And Leave ManagementEditDialogComponent from "../Attendance And Leave ManagementEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Attendance And Leave Management edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Attendance And Leave ManagementEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Attendance And Leave Management-edit-dialog-component")).toBeInTheDocument();
});
