import React from "react";
import { render, screen } from "@testing-library/react";

import Employee Self Service PortalPage from "../Employee Self Service PortalPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Employee Self Service Portal page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Employee Self Service PortalPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Employee Self Service Portal-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Employee Self Service Portal-add-button")).toBeInTheDocument();
});
