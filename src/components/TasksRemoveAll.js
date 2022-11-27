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
		<div data-testid='tasks-remove-all'>
			{tasks?.length > 0 && (
				<button
					data-testid='tasks-remove-all-button'
					className='btn btn--danger'
					onClick={handleRemoveAll}>
					Remove All Tasks
				</button>
			)}
		</div>
	);
}

export default TasksRemoveAll;
