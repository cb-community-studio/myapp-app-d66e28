import React from "react";
import { render, screen } from "@testing-library/react";

import Compliance And DocumentsPage from "../Compliance And DocumentsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Compliance And Documents page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Compliance And DocumentsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Compliance And Documents-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Compliance And Documents-add-button")).toBeInTheDocument();
});
