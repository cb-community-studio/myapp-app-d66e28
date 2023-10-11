import React from "react";
import { render, screen } from "@testing-library/react";

import Workforce Diversity And InclusiEditDialogComponent from "../Workforce Diversity And InclusiEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Workforce Diversity And Inclusi edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Workforce Diversity And InclusiEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Workforce Diversity And Inclusi-edit-dialog-component")).toBeInTheDocument();
});
