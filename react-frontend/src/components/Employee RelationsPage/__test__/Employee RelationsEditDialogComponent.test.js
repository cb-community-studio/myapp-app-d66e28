import React from "react";
import { render, screen } from "@testing-library/react";

import Employee RelationsEditDialogComponent from "../Employee RelationsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Employee Relations edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Employee RelationsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Employee Relations-edit-dialog-component")).toBeInTheDocument();
});
