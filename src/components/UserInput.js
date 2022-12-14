import React from "react";

import { useDispatch } from "react-redux";
import { addUser } from "../actions/userActions";

// Spacemen on the mars mission
import { SPACEMEN } from "./constants";

function UserInput() {
	const dispatch = useDispatch();

	const handleUserChange = (e) => {
		dispatch(addUser(e.target.value));
	};

	return (
		<div className='field-grp' data-testid='user-input'>
			<div className='field field-grp__field'>
				<label htmlFor='user'>User</label>
				<select
					name='user'
					id='user'
					onChange={handleUserChange}
					data-testid='user-input-field'>
					<option value=''>Please select a user</option>
					{SPACEMEN.map((spaceman, i) => (
						<option key={i} value={spaceman}>
							{spaceman}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default UserInput;
