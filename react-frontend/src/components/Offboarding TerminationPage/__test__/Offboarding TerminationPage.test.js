import React from "react";
import { render, screen } from "@testing-library/react";

import Offboarding TerminationPage from "../Offboarding TerminationPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Offboarding Termination page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Offboarding TerminationPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Offboarding Termination-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Offboarding Termination-add-button")).toBeInTheDocument();
});
