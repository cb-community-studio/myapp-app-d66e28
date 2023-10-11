import React from "react";
import { render, screen } from "@testing-library/react";

import Job PostingPage from "../Job PostingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Job Posting page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Job PostingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Job Posting-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Job Posting-add-button")).toBeInTheDocument();
});
