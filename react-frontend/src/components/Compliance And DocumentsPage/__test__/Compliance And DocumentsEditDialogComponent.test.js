import React from "react";
import { render, screen } from "@testing-library/react";

import Compliance And DocumentsEditDialogComponent from "../Compliance And DocumentsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Compliance And Documents edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Compliance And DocumentsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Compliance And Documents-edit-dialog-component")).toBeInTheDocument();
});
