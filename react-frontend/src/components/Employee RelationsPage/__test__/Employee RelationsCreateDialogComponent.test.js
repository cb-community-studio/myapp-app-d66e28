import React from "react";
import { render, screen } from "@testing-library/react";

import Employee RelationsCreateDialogComponent from "../Employee RelationsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Employee Relations create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Employee RelationsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Employee Relations-create-dialog-component")).toBeInTheDocument();
});
