export const addTask = (task) => {
	return {
		type: "ADD_TASK",
		payload: task,
	};
};

export const deleteTask = (id) => {
	console.log("deleteTask action", id);
	return {
		type: "DELETE_TASK",
		payload: id,
	};
};

export const editTask = (task) => {
	return {
		type: "EDIT_TASK",
		payload: task,
	};
};

export const deleteAllTasks = () => {
	return {
		type: "DELETE_ALL_TASKS",
	};
};
