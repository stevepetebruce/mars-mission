import React, { useState, useRef } from "react";

// Unique ID generator
import { v4 as uuidv4 } from "uuid";

// components
import UserInput from "./UserInput";

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
			user: currentUser || "No user assigned",
		};
		dispatch(addTask(task));
		title.current.value = "";
		description.current.value = "";
		setAssignedTo(SPACEMEN[0]);
	};

	return (
		<div data-testid='task-input'>
			<UserInput />
			<h1>Add Task</h1>
			<form data-testid='task-form' onSubmit={handleTaskSubmit}>
				<label htmlFor='title'>Title</label>
				<input type='text' name='title' ref={title} data-testid='title-input' />
				<label htmlFor='description'>Description</label>
				<textarea
					name='description'
					id='description'
					cols='30'
					rows='4'
					ref={description}
					data-testid='description-input'></textarea>
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

				<button type='submit' data-testid='submit-button'>
					Add Task
				</button>
			</form>
		</div>
	);
}

export default TaskInput;
