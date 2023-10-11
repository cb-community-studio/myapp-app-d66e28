import React from "react";
import { render, screen } from "@testing-library/react";

import Benefits AdministrationPage from "../Benefits AdministrationPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Benefits Administration page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Benefits AdministrationPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Benefits Administration-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Benefits Administration-add-button")).toBeInTheDocument();
});
