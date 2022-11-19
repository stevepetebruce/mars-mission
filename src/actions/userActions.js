export const addUser = (user) => {
	return {
		type: "SET_CURRENT_USER",
		payload: user,
	};
};
