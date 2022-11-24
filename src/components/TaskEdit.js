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
	const [assignedTo, setAssignedTo] = useState(task?.assignedTo);

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
		<div data-testid='task-edit'>
			<button onClick={() => setDisplay(!display)}>Edit Task</button>
			{display && (
				<form onSubmit={handleTaskEdit}>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						name='title'
						ref={title}
						defaultValue={task.title}
						data-testid='title-input-edit'
					/>
					<label htmlFor='description'>Description</label>
					<textarea
						defaultValue={task.description}
						name='description'
						id='description'
						cols='30'
						rows='4'
						ref={description}
						data-testid='description-input-edit'></textarea>
					<label htmlFor='assignedTo'>Assigned To</label>
					<select
						defaultValue={task.assignedTo}
						data-testid='assignedTo-input-edit'
						name='assignedTo'
						id='assignedTo'
						onChange={handleAssignedToChange}>
						{SPACEMEN.map((spaceman, i) => (
							<option key={i} value={spaceman}>
								{spaceman}
							</option>
						))}
					</select>

					<button type='submit'>Edit Task</button>
				</form>
			)}
		</div>
	);
}

export default TaskEdit;
