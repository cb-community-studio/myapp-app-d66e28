import React from "react";
import { render, screen } from "@testing-library/react";

import Benefits Open EnrollmentCreateDialogComponent from "../Benefits Open EnrollmentCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Benefits Open Enrollment create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Benefits Open EnrollmentCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Benefits Open Enrollment-create-dialog-component")).toBeInTheDocument();
});
