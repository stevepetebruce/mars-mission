import React from "react";

import { useDispatch } from "react-redux";

import { deleteTask } from "../actions/taskActions";

function TaskRemove(taskId) {
	const dispatch = useDispatch();

	const handleRemoveTask = (id) => {
		dispatch(deleteTask(id));
	};
	return (
		<div>
			<button onClick={() => handleRemoveTask(taskId)}>X</button>
		</div>
	);
}

export default TaskRemove;
