import React from "react";

import { useSelector } from "react-redux";

function TasksTotal() {
	const { tasks } = useSelector((state) => state.tasks);
	return (
		<div data-testid='total-tasks' className='total-tasks'>
			TOTAL TASKS: {tasks?.length ? tasks.length : 0}
		</div>
	);
}

export default TasksTotal;
