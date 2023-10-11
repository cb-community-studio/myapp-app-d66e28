import React from "react";
import { render, screen } from "@testing-library/react";

import Succession PlanningEditDialogComponent from "../Succession PlanningEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Succession Planning edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Succession PlanningEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Succession Planning-edit-dialog-component")).toBeInTheDocument();
});
