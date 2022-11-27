import React from "react";

import { useSelector } from "react-redux";

function User() {
	const currentUser = useSelector((state) => state.user?.currentUser);

	return (
		<div data-testid='user' className='user'>
			USER: {currentUser ? currentUser : "No user set"}
		</div>
	);
}

export default User;
