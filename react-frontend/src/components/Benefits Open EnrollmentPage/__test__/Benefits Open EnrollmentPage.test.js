import React from "react";
import { render, screen } from "@testing-library/react";

import Benefits Open EnrollmentPage from "../Benefits Open EnrollmentPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Benefits Open Enrollment page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Benefits Open EnrollmentPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Benefits Open Enrollment-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Benefits Open Enrollment-add-button")).toBeInTheDocument();
});
