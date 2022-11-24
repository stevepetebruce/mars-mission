import React from "react";

import { useSelector } from "react-redux";

function User() {
	const currentUser = useSelector((state) => state.user?.currentUser);
	console.log({ currentUser });

	return (
		<div data-testid='user'>
			User: {currentUser ? currentUser : "No user set"}
		</div>
	);
}

export default User;
