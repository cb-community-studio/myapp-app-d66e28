import React from "react";
import { render, screen } from "@testing-library/react";

import ApplicantPage from "../ApplicantPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Applicant page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ApplicantPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Applicant-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Applicant-add-button")).toBeInTheDocument();
});
