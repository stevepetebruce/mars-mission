import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteAllTasks } from "../actions/taskActions";

function TasksRemoveAll() {
	const { tasks } = useSelector((state) => state.tasks);
	const dispatch = useDispatch();

	const handleRemoveAll = () => {
		dispatch(deleteAllTasks());
	};

	return (
		<>
			{tasks.length > 0 && (
				<button onClick={handleRemoveAll}>Remove All</button>
			)}
		</>
	);
}

export default TasksRemoveAll;
