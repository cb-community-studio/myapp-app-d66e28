import React from "react";
import { render, screen } from "@testing-library/react";

import Benefits Open EnrollmentEditDialogComponent from "../Benefits Open EnrollmentEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Benefits Open Enrollment edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Benefits Open EnrollmentEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Benefits Open Enrollment-edit-dialog-component")).toBeInTheDocument();
});
