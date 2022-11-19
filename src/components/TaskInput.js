import React, { useState, useRef } from "react";

// Unique ID generator
import { v4 as uuidv4 } from "uuid";

// components
import UserInput from "./UserInput";

import { useDispatch } from "react-redux";
import { addTask } from "../actions/taskActions";

// Spacemen on the mars mission
import { SPACEMEN } from "./constants";

function TaskInput() {
	const taskDispatch = useDispatch();

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
		};
		taskDispatch(addTask(task));
		title.current.value = "";
		description.current.value = "";
		setAssignedTo(SPACEMEN[0]);
	};

	return (
		<div>
			<UserInput />
			<h1>Add Task</h1>
			<form onSubmit={handleTaskSubmit}>
				<label htmlFor='title'>Title</label>
				<input type='text' name='title' ref={title} />
				<label htmlFor='description'>Description</label>
				<textarea
					name='description'
					id='description'
					cols='30'
					rows='4'
					ref={description}></textarea>
				<label htmlFor='assignedTo'>Assigned To</label>
				<select
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
	);
}

export default TaskInput;
