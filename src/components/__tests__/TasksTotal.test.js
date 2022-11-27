import React from "react";
import Tasks from "../TasksTotal";
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

		const tasks = screen.getByTestId("total-tasks");
		expect(tasks).toBeInTheDocument();
	});

	test("should display 0 if no tasks", () => {
		render(
			<Provider store={store}>
				<Tasks />
			</Provider>
		);

		const newState = tasksReducer(undefined, {});
		expect(newState.tasks.length).toBe(0);

		expect(screen.queryByTestId("total-tasks")).toContainHTML("0");
	});
	test("should display a number if tasks are stored in state", () => {
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
