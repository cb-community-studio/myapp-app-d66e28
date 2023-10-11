import React from "react";
import { render, screen } from "@testing-library/react";

import Employee Self Service PortalEditDialogComponent from "../Employee Self Service PortalEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Employee Self Service Portal edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Employee Self Service PortalEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Employee Self Service Portal-edit-dialog-component")).toBeInTheDocument();
});
