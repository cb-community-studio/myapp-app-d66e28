import React from "react";
import { render, screen } from "@testing-library/react";

import Performance ReviewCreateDialogComponent from "../Performance ReviewCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Performance Review create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Performance ReviewCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Performance Review-create-dialog-component")).toBeInTheDocument();
});
