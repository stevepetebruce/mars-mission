import React from "react";

import { useSelector } from "react-redux";

import TaskEdit from "./TaskEdit";
import TaskRemove from "./TaskRemove";

function Tasks() {
	const { tasks } = useSelector((state) => state.tasks);

	return (
		<div data-testid='tasks'>
			{!tasks?.length || tasks?.length === 0 ? (
				<p data-testid='no-tasks'>There are currently no tasks</p>
			) : (
				<>
					<h3>Tasks</h3>
					{tasks?.map((task) => (
						<div key={task.id} className='card' data-testid='task'>
							<div className='card__header'>
								<div className='tag'>
									{task.user ? `User: ${task.user}` : "User not selected"}
								</div>
								<TaskRemove taskId={task.id} />
							</div>

							<h4>{task.title ? task.title : "Title not entered"}</h4>
							<p>
								{task.description
									? task.description
									: "Description not entered"}
							</p>
							<p>
								{task.assignedTo
									? `Assigned to: ${task.assignedTo}`
									: "Task not assigned to anyone"}
							</p>
							<div className='card__actions'>
								<TaskEdit task={task} />
							</div>
						</div>
					))}
				</>
			)}
		</div>
	);
}

export default Tasks;
