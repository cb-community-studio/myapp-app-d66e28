import React from "react";
import { render, screen } from "@testing-library/react";

import Employee Surveys And FeedbackCreateDialogComponent from "../Employee Surveys And FeedbackCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Employee Surveys And Feedback create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Employee Surveys And FeedbackCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Employee Surveys And Feedback-create-dialog-component")).toBeInTheDocument();
});
