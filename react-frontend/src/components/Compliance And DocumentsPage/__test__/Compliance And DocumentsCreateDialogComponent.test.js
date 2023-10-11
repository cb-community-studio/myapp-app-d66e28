import React from "react";
import { render, screen } from "@testing-library/react";

import Compliance And DocumentsCreateDialogComponent from "../Compliance And DocumentsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Compliance And Documents create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Compliance And DocumentsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Compliance And Documents-create-dialog-component")).toBeInTheDocument();
});
