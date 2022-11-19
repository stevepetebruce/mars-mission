import "./App.css";

import Tasks from "./components/Tasks";
import TaskInput from "./components/TaskInput";
import User from "./components/User";

function App() {
	return (
		<div className='App'>
			<TaskInput />
			<User />
			<Tasks />
		</div>
	);
}

export default App;
