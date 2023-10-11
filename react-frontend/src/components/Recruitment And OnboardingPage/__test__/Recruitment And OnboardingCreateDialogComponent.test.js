import React from "react";
import { render, screen } from "@testing-library/react";

import Recruitment And OnboardingCreateDialogComponent from "../Recruitment And OnboardingCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Recruitment And Onboarding create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Recruitment And OnboardingCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Recruitment And Onboarding-create-dialog-component")).toBeInTheDocument();
});
