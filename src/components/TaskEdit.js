import React, { useState, useRef } from "react";

// Spacemen on the mars mission
import { SPACEMEN } from "./constants";

import { useDispatch } from "react-redux";
import { editTask } from "../actions/taskActions";

function TaskEdit({ task }) {
	const dispatch = useDispatch();
	const [display, setDisplay] = useState(false);

	const title = useRef(null);
	const description = useRef(null);
	const [assignedTo, setAssignedTo] = useState(task.assignedTo);

	const handleAssignedToChange = (e) => {
		setAssignedTo(e.target.value);
	};

	const handleTaskEdit = (e) => {
		e.preventDefault();

		const updatedTask = {
			id: task.id,
			title: title.current.value,
			description: description.current.value,
			assignedTo: assignedTo,
			user: task.user,
		};

		dispatch(editTask(updatedTask));

		setDisplay(false);
	};

	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Edit Task</button>
			{display && (
				<div>
					<form onSubmit={handleTaskEdit}>
						<label htmlFor='title'>Title</label>
						<input
							type='text'
							name='title'
							ref={title}
							defaultValue={task.title}
						/>
						<label htmlFor='description'>Description</label>
						<textarea
							defaultValue={task.description}
							name='description'
							id='description'
							cols='30'
							rows='4'
							ref={description}></textarea>
						<label htmlFor='assignedTo'>Assigned To</label>
						<select
							defaultValue={task.assignedTo}
							name='assignedTo'
							id='assignedTo'
							onChange={handleAssignedToChange}>
							{SPACEMEN.map((spaceman, i) => (
								<option key={i} value={spaceman}>
									{spaceman}
								</option>
							))}
						</select>

						<button type='submit'>Add Task</button>
					</form>
				</div>
			)}
		</div>
	);
}

export default TaskEdit;
