import React from "react";
import Tasks from "../Tasks";
import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import tasksReducer from "../../reducers/tasksReducer";
const store = createStore(tasksReducer);

afterEach(() => {
	cleanup();
});

describe("Tasks", () => {
	test("renders Tasks component", () => {
		render(
			<Provider store={store}>
				<Tasks />
			</Provider>
		);

		const tasks = screen.getByTestId("tasks");
		expect(tasks).toBeInTheDocument();
	});

	test("should not render tasks if no tasks are present", () => {
		render(
			<Provider store={store}>
				<Tasks />
			</Provider>
		);

		const newState = tasksReducer(undefined, {});
		expect(newState.tasks.length).toBe(0);
	});

	test("should store tasks in store", () => {
		render(
			<Provider store={store}>
				<Tasks />
			</Provider>
		);

		const tasks = [
			{
				id: "1234",
				title: "Task 1",
				description: "Task 1 description",
				assignedTo: "Task 1 assignedTo",
				user: "User",
			},
		];

		const newState = tasksReducer(undefined, {
			type: "ADD_TASK",
			payload: tasks,
		});

		expect(newState.tasks.length).toBe(1);
	});
});
