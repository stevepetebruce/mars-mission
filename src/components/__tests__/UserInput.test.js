import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import UserInput from "../UserInput";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userReducer from "../../reducers/userReducer";
const store = createStore(userReducer);

afterEach(() => {
	cleanup();
});

describe("UserInput", () => {
	test("renders with redux", () => {
		render(
			<Provider store={store}>
				<UserInput />
			</Provider>
		);
		const userInput = screen.getByTestId("user-input");
		expect(userInput).toBeInTheDocument();
	});

	test("should render user input field", () => {
		render(
			<Provider store={store}>
				<UserInput />
			</Provider>
		);

		const userInputField = screen.getByTestId("user-input-field");
		expect(userInputField).toBeInTheDocument();
	});

	test("Dispatches the correct user to the store", () => {
		render(
			<Provider store={store}>
				<UserInput />
			</Provider>
		);

		const mockUser = "testUser";

		const newState = userReducer(undefined, {
			type: "SET_CURRENT_USER",
			payload: mockUser,
		});

		expect(newState.currentUser.length).toBeGreaterThan(0);
		expect(newState.currentUser).toEqual(mockUser);
	});
});
