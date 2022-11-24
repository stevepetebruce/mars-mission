import React from "react";
import User from "../User";
import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userReducer from "../../reducers/userReducer";
const store = createStore(userReducer);

afterEach(() => {
	cleanup();
});

describe("User", () => {
	test("renders with redux", () => {
		render(
			<Provider store={store}>
				<User />
			</Provider>
		);
		const user = screen.getByTestId("user");
		expect(user).toBeInTheDocument();
	});

	test("Expect state to contain a user", () => {
		render(
			<Provider store={store}>
				<User />
			</Provider>
		);
		const mock = "testUser";
		const newState = userReducer(undefined, {
			type: "SET_CURRENT_USER",
			payload: mock,
		});
		expect(newState.currentUser.length).toBeGreaterThan(0);
	});

	test("Should not display user if user is not present", () => {
		render(
			<Provider store={store}>
				<User />
			</Provider>
		);

		const { currentUser } = store.getState();
		expect(currentUser).toBe(null);
		expect(screen.queryByTestId("user")).toContainHTML("No user set");
	});
});
