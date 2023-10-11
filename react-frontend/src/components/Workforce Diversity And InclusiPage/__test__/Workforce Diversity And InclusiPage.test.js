import React from "react";
import { render, screen } from "@testing-library/react";

import Workforce Diversity And InclusiPage from "../Workforce Diversity And InclusiPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Workforce Diversity And Inclusi page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Workforce Diversity And InclusiPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Workforce Diversity And Inclusi-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Workforce Diversity And Inclusi-add-button")).toBeInTheDocument();
});
