import React from "react";

import { useSelector } from "react-redux";

function Tasks() {
	const { tasks } = useSelector((state) => state.tasks);
	console.log({ tasks });
	return (
		<div>
			{!tasks.length ? (
				<p>No tasks</p>
			) : (
				tasks.map((task) => (
					<div key={task.id}>
						<h3>{task.title}</h3>
						<p>{task.description}</p>
						<p>{task.assignedTo}</p>
					</div>
				))
			)}
		</div>
	);
}

export default Tasks;
