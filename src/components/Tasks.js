import React from "react";

import { useSelector } from "react-redux";

import TaskRemove from "./TaskRemove";

function Tasks() {
	const { tasks } = useSelector((state) => state.tasks);

	return (
		<div>
			{!tasks.length ? (
				<p>No tasks</p>
			) : (
				tasks.map((task) => (
					<div key={task.id}>
						<p>{task.user}</p>
						<h3>{task.title}</h3>
						<p>{task.description}</p>
						<p>{task.assignedTo}</p>
						<TaskRemove taskId={task.id} />
					</div>
				))
			)}
		</div>
	);
}

export default Tasks;
