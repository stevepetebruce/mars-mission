import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import TasksRemoveAll from "../TasksRemoveAll";
import { Provider } from "react-redux";
import { createStore } from "redux";
import tasksReducer from "../../reducers/tasksReducer";

const store = createStore(tasksReducer);

afterEach(() => {
	cleanup();
});

describe("TasksRemoveAll", () => {
	test("renders TasksRemoveAll component", () => {
		render(
			<Provider store={store}>
				<TasksRemoveAll />
			</Provider>
		);
		const tasksRemoveAll = screen.getByTestId("tasks-remove-all");
		expect(tasksRemoveAll).toBeInTheDocument();
	});

	test("Reducer should remove all tasks", () => {
		render(
			<Provider store={store}>
				<TasksRemoveAll />
			</Provider>
		);
		const mockTasks = {
			tasks: [
				{
					id: "1234",
					title: "Task 1",
					description: "Task 1 description",
					assignedTo: "Task 1 assignedTo",
					user: "User",
				},
				{
					id: "1235",
					title: "Task 1",
					description: "Task 1 description",
					assignedTo: "Task 1 assignedTo",
					user: "User",
				},
			],
		};
		expect(mockTasks.tasks.length).toBe(2);
		const newState = tasksReducer(mockTasks, {
			type: "DELETE_ALL_TASKS",
		});
		expect(newState.tasks.length).toBe(0);
	});
});
