import React from "react";
import { render, screen } from "@testing-library/react";

import Employee RelationsPage from "../Employee RelationsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Employee Relations page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Employee RelationsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Employee Relations-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Employee Relations-add-button")).toBeInTheDocument();
});
