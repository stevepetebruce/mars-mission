const initialUserState = {
	currentUser: null,
};

const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case "SET_CURRENT_USER":
			return {
				...state,
				currentUser: action.payload,
			};
		case "UPDATE_CURRENT_USER":
			return {
				...state,
				currentUser: {
					...state.currentUser,
					...action.payload,
				},
			};
		default:
			return state;
	}
};

export default userReducer;
