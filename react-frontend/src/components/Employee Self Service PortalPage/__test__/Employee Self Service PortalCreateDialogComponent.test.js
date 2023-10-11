import React from "react";
import { render, screen } from "@testing-library/react";

import Employee Self Service PortalCreateDialogComponent from "../Employee Self Service PortalCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Employee Self Service Portal create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Employee Self Service PortalCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Employee Self Service Portal-create-dialog-component")).toBeInTheDocument();
});
