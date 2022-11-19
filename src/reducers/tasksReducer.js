const initialTasksState = {
	tasks: [],
};

const tasksReducer = (state = initialTasksState, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			};
		case "DELETE_TASK": {
			const tasks = state.tasks.filter(
				(task) => task.id !== action.payload.taskId
			);
			return {
				...state,
				tasks,
			};
		}
		case "EDIT_TASK": {
			const tasks = state.tasks.map((task) => {
				if (task.id === action.payload.id) {
					return {
						...task,
						...action.payload,
					};
				}
				return task;
			});
			return {
				...state,
				tasks,
			};
		}
		case "DELETE_ALL_TASKS": {
			return {
				...state,
				tasks: [],
			};
		}
		default:
			return state;
	}
};

export default tasksReducer;
