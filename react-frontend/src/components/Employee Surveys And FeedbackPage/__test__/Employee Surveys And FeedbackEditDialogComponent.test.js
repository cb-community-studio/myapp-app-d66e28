import React from "react";
import { render, screen } from "@testing-library/react";

import Employee Surveys And FeedbackEditDialogComponent from "../Employee Surveys And FeedbackEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Employee Surveys And Feedback edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Employee Surveys And FeedbackEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Employee Surveys And Feedback-edit-dialog-component")).toBeInTheDocument();
});
