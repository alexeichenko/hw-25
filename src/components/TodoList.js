import { useContext } from 'react';
import moonIcon from '../img/icon-moon.svg';
import AddTodo from './AddTodo';
import { TodoContext } from '../store/context';

const TodoList = () => {

	const { state, dispatch } = useContext(TodoContext);

	const onDelete = (id) => {
		dispatch({ type: "DELETE_TODO", payload: id })
	};

	const onChange = (todo) => {

		if (todo.completed) {
			dispatch({ type: "UNCOMPLETED_TODO", payload: todo.id })
		} else {
			dispatch({ type: "COMPLETED_TODO", payload: todo.id })
		}

	};

	return (

		<div className="wrapper">
			<section className="app">
				<header className="app__header">
					<h1 className="app__title">Todo</h1>
					<img src={moonIcon} alt="header icon" />
				</header>
				<main className='app__main'>
					<AddTodo />
					<ul className='app__todo-list'>
						{state.todos.map(todo => (
							<li key={todo.id} className='app__todo-item'>
								<div className='app__round'>
									<input
										type='checkbox'
										id="checkbox"
										checked={todo.completed}
										onChange={() => onChange(todo)}
									/>
									<label for="checkbox" />
								</div>
								<span style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#6e6e6e' : '#000' }}>
									{todo.text}
								</span>

								{!todo.completed &&
									<button className='app__btn-delete' onClick={() => onDelete(todo.id)}><span/><span/></button>
								}
							</li>
						))}
					</ul>
				</main>
			</section>
		</div>

	)

};

export default TodoList;