import React from "react";
import { render, screen } from "@testing-library/react";

import Performance ReviewEditDialogComponent from "../Performance ReviewEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Performance Review edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Performance ReviewEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Performance Review-edit-dialog-component")).toBeInTheDocument();
});
