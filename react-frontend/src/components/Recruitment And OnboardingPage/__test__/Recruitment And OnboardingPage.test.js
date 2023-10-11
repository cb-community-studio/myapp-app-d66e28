import React from "react";
import { render, screen } from "@testing-library/react";

import Recruitment And OnboardingPage from "../Recruitment And OnboardingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Recruitment And Onboarding page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Recruitment And OnboardingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Recruitment And Onboarding-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Recruitment And Onboarding-add-button")).toBeInTheDocument();
});
