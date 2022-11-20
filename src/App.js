import "./App.css";

import Tasks from "./components/Tasks";
import TaskInput from "./components/TaskInput";
import User from "./components/User";
import TasksRemoveAll from "./components/TasksRemoveAll";

function App() {
	return (
		<div className='App'>
			<TaskInput />
			<User />
			<Tasks />
			<TasksRemoveAll />
		</div>
	);
}

export default App;
