import React from "react";
import { render, screen } from "@testing-library/react";

import Employee Surveys And FeedbackPage from "../Employee Surveys And FeedbackPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders Employee Surveys And Feedback page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Employee Surveys And FeedbackPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("Employee Surveys And Feedback-datatable")).toBeInTheDocument();
    expect(screen.getByRole("Employee Surveys And Feedback-add-button")).toBeInTheDocument();
});
