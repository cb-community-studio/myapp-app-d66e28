import React from "react";
import { render, screen } from "@testing-library/react";

import Offboarding TerminationEditDialogComponent from "../Offboarding TerminationEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Offboarding Termination edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Offboarding TerminationEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Offboarding Termination-edit-dialog-component")).toBeInTheDocument();
});
