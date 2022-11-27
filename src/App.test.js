import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/reducers";
const store = createStore(rootReducer);

describe("App", () => {
	test("renders App component", () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);
		const app = screen.getByTestId("app");
		expect(app).toBeInTheDocument();
	});
});
