import React from "react";
import { render, screen } from "@testing-library/react";

import Benefits AdministrationEditDialogComponent from "../Benefits AdministrationEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Benefits Administration edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Benefits AdministrationEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Benefits Administration-edit-dialog-component")).toBeInTheDocument();
});
