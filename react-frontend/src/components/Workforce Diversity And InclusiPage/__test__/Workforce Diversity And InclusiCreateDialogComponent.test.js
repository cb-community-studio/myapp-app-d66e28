import React from "react";
import { render, screen } from "@testing-library/react";

import Workforce Diversity And InclusiCreateDialogComponent from "../Workforce Diversity And InclusiCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Workforce Diversity And Inclusi create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Workforce Diversity And InclusiCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Workforce Diversity And Inclusi-create-dialog-component")).toBeInTheDocument();
});
