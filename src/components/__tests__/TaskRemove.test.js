import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import TaskRemove from "../TaskRemove";
import { Provider } from "react-redux";
import { createStore } from "redux";
import tasksReducer from "../../reducers/tasksReducer";
const store = createStore(tasksReducer);

afterEach(() => {
	cleanup();
});

describe("TaskRemove", () => {
	test("renders with redux", () => {
		render(
			<Provider store={store}>
				<TaskRemove />
			</Provider>
		);
		const taskRemove = screen.getByTestId("task-remove");
		expect(taskRemove).toBeInTheDocument();
	});

	test("should render remove button", () => {
		render(
			<Provider store={store}>
				<TaskRemove />
			</Provider>
		);
		const button = screen.getByTestId("button-remove");
		expect(button).toBeInTheDocument();
	});

	test("Should delete mock task", () => {
		render(
			<Provider store={store}>
				<TaskRemove />
			</Provider>
		);
		const mockTask = {
			id: "1",
			title: "Task 1",
			description: "Description 1",
			assignedTo: "Me",
		};
		const newState = tasksReducer(undefined, {
			type: "ADD_TASK",
			payload: mockTask,
		});
		expect(newState.tasks.length).toBe(1);

		const newState2 = tasksReducer(newState, {
			type: "DELETE_TASK",
			payload: { taskId: "1" },
		});

		expect(newState2.tasks.length).toBe(0);
	});

	test("should delete 2nd task", () => {
		render(
			<Provider store={store}>
				<TaskRemove />
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
			type: "DELETE_TASK",
			payload: { taskId: "1235" },
		});
		expect(newState.tasks.length).toBe(1);
		expect(newState.tasks[0].id).toBe("1234");
	});
});
