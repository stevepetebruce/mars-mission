import React from "react";
import {
	render,
	screen,
	cleanup,
	fireEvent,
	dispatchEvent,
} from "@testing-library/react";
import TaskInput from "../TaskInput";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers/reducers";
const store = createStore(rootReducer);

afterEach(() => {
	cleanup();
});

describe("TaskInput", () => {
	test("renders with redux", () => {
		render(
			<Provider store={store}>
				<TaskInput />
			</Provider>
		);
		const taskInput = screen.getByTestId("task-input");
		expect(taskInput).toBeInTheDocument();
	});

	test("should render input fields", () => {
		render(
			<Provider store={store}>
				<TaskInput />
			</Provider>
		);

		const titleInput = screen.getByTestId("title-input");
		const descriptionInput = screen.getByTestId("description-input");
		const assignedToInput = screen.getByTestId("assigned-to-input");

		expect(titleInput).toBeInTheDocument();
		expect(descriptionInput).toBeInTheDocument();
		expect(assignedToInput).toBeInTheDocument();
	});

	test("It should render a form", () => {
		render(
			<Provider store={store}>
				<TaskInput />
			</Provider>
		);
		const form = screen.getByTestId("task-form");
		expect(form).toBeInTheDocument();
	});

	test("Dispatches the correct title and description and assignedTo to the store", () => {
		render(
			<Provider store={store}>
				<TaskInput />
			</Provider>
		);
		const titleInput = screen.getByTestId("title-input");
		const descriptionInput = screen.getByTestId("description-input");
		const assignedToInput = screen.getByTestId("assigned-to-input");
		const submitButton = screen.getByTestId("submit-button");
		fireEvent.change(titleInput, { target: { value: "Test Title" } });
		fireEvent.change(descriptionInput, {
			target: { value: "Test Description" },
		});
		fireEvent.change(assignedToInput, { target: { value: "" } });
		fireEvent.click(submitButton);
		const state = store.getState();
		console.log(state.tasks);
		expect(state.tasks.tasks[0].title).toBe("Test Title");
		expect(state.tasks.tasks[0].description).toBe("Test Description");
		expect(state.tasks.tasks[0].assignedTo).toBe("");
	});
});
