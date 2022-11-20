import React from "react";

import { useSelector } from "react-redux";

import TaskEdit from "./TaskEdit";
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
						<p>{task.user ? task.user : "User not selected"}</p>
						<h3>{task.title ? task.title : "Title not entered"}</h3>
						<p>
							{task.description ? task.description : "Description not entered"}
						</p>
						<p>
							{task.assignedTo
								? task.assignedTo
								: "Task not assigned to anyone"}
						</p>
						<TaskRemove taskId={task.id} />
						<TaskEdit task={task} />
					</div>
				))
			)}
		</div>
	);
}

export default Tasks;
