import React from "react";
import { render, screen } from "@testing-library/react";

import Succession PlanningPage from "../Succession PlanningPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Succession Planning page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Succession PlanningPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Succession Planning-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Succession Planning-add-button")).toBeInTheDocument();
});
