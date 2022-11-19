import React from "react";

import { useSelector } from "react-redux";

function User() {
	const { currentUser } = useSelector((state) => state.user);
	console.log({ currentUser });

	return <div>User: {currentUser}</div>;
}

export default User;
