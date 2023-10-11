import React from "react";
import { render, screen } from "@testing-library/react";

import Performance ReviewPage from "../Performance ReviewPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Performance Review page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Performance ReviewPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Performance Review-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Performance Review-add-button")).toBeInTheDocument();
});
