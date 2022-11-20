import "./App.css";

import Tasks from "./components/Tasks";
import TaskInput from "./components/TaskInput";
import User from "./components/User";
import TasksRemoveAll from "./components/TasksRemoveAll";
import useFetchImage from "./hooks/useFetchImage";

function App() {
	const { loading, image } = useFetchImage({
		url: "https://source.unsplash.com/random/800x600/?mars",
	});
	return (
		<div className='App'>
			{loading ? <p>Loading...</p> : <img src={image} alt='Mars' />}

			<TaskInput />
			<User />
			<Tasks />
			<TasksRemoveAll />
		</div>
	);
}

export default App;
