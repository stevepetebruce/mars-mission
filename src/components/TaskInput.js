import React, { useState, useRef } from "react";

// Unique ID generator
import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../actions/taskActions";

// Spacemen on the mars mission
import { SPACEMEN } from "./constants";

function TaskInput() {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.user);

	const title = useRef(null);
	const description = useRef(null);
	const [assignedTo, setAssignedTo] = useState(SPACEMEN[0]);

	const handleAssignedToChange = (e) => {
		setAssignedTo(e.target.value);
	};

	const handleTaskSubmit = (e) => {
		e.preventDefault();

		const task = {
			id: uuidv4(),
			title: title.current.value,
			description: description.current.value,
			assignedTo: assignedTo,
			user: currentUser || "No user selected",
		};
		dispatch(addTask(task));
		title.current.value = "";
		description.current.value = "";
		setAssignedTo(SPACEMEN[0]);
	};

	return (
		<div data-testid='task-input'>
			<h1>Add a Task</h1>
			<form
				data-testid='task-form'
				onSubmit={handleTaskSubmit}
				className='form-wrapper'>
				<div className='field-grp'>
					<div className='field field-grp__field'>
						<label htmlFor='title'>Title</label>
						<input
							type='text'
							name='title'
							ref={title}
							data-testid='title-input'
						/>
						<label htmlFor='assignedTo'>Assigned To</label>
						<select
							name='assignedTo'
							id='assignedTo'
							data-testid='assigned-to-input'
							onChange={handleAssignedToChange}>
							{SPACEMEN.map((spaceman, i) => (
								<option key={i} value={spaceman}>
									{spaceman}
								</option>
							))}
						</select>
					</div>
					<div className='field field-grp__field--2x'>
						<label htmlFor='description'>Description</label>
						<textarea
							name='description'
							id='description'
							rows='2'
							ref={description}
							data-testid='description-input'></textarea>
					</div>
					<div className='field field-grp__field display-bottom'>
						<button
							type='submit'
							className='btn btn--primary'
							data-testid='submit-button'>
							Add Task
						</button>
					</div>
				</div>
			</form>
			<hr />
		</div>
	);
}

export default TaskInput;
