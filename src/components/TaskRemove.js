import React from "react";

import { useDispatch } from "react-redux";

import { deleteTask } from "../actions/taskActions";

function TaskRemove(taskId) {
	const dispatch = useDispatch();

	const handleRemoveTask = (id) => {
		dispatch(deleteTask(id));
	};
	return (
		<div data-testid='task-remove'>
			<button
				onClick={() => handleRemoveTask(taskId)}
				data-testid='button-remove'>
				X
			</button>
		</div>
	);
}

export default TaskRemove;
