import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import TaskEdit from "../TaskEdit";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import tasksReducer from "../../reducers/tasksReducer";
const store = createStore(tasksReducer);

afterEach(() => {
	cleanup();
});

describe("TaskEdit", () => {
	test("renders with redux", () => {
		render(
			<Provider store={store}>
				<TaskEdit />
			</Provider>
		);
		const taskEdit = screen.getByTestId("task-edit");
		expect(taskEdit).toBeInTheDocument();
	});

	test("Should edit mock task", () => {
		render(
			<Provider store={store}>
				<TaskEdit />
			</Provider>
		);

		const mockTask = {
			id: "1",
			title: "Task 1",
			description: "Description 1",
			assignedTo: "Me",
			user: "Me",
		};

		const newState = tasksReducer(undefined, {
			type: "ADD_TASK",
			payload: mockTask,
		});

		expect(newState.tasks.length).toBe(1);

		const newState2 = tasksReducer(newState, {
			type: "EDIT_TASK",
			payload: {
				id: "1",
				title: "Task 2",
				description: "Description 2",
				assignedTo: "Me",
				user: "Me",
			},
		});

		expect(newState2.tasks.length).toBe(1);

		expect(newState2.tasks[0].title).toBe("Task 2");
		expect(newState2.tasks[0].description).toBe("Description 2");
	});
});
