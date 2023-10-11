import React from "react";
import { render, screen } from "@testing-library/react";

import Training And DevelopmentCreateDialogComponent from "../Training And DevelopmentCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Training And Development create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Training And DevelopmentCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Training And Development-create-dialog-component")).toBeInTheDocument();
});
