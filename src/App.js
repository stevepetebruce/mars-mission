import "./App.css";

import Tasks from "./components/Tasks";
import TaskInput from "./components/TaskInput";
import User from "./components/User";
import UserInput from "./components/UserInput";
import TasksRemoveAll from "./components/TasksRemoveAll";
import TasksTotal from "./components/TasksTotal";
import useFetchImage from "./hooks/useFetchImage";

function App() {
	const { loading, image } = useFetchImage({
		url: "https://source.unsplash.com/random/800x600/?mars",
	});
	return (
		<div className='container' data-testid='app'>
			<header className='header'>
				I would like to die on Mars. Just not on impact.
			</header>
			<main className='content-main'>
				<aside className='content-left'>
					<div className='card'>
						<User />
						<TasksTotal />
						<TasksRemoveAll />
					</div>
				</aside>
				<article className='content-right'>
					<div className='article-wrapper'>
						<div className='image-container'>
							{loading ? (
								<div className='spinner'></div>
							) : (
								<img src={image} alt='Mars' />
							)}
						</div>
						<hr />
						<UserInput />
						<TaskInput />
						<Tasks />
					</div>
				</article>
			</main>
		</div>
	);
}

export default App;
