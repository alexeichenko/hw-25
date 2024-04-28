export const todoReducer = (state, action) => {

	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, action.payload]
			};

		case 'DELETE_TODO': 
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload)
			};

		case 'COMPLETED_TODO':
			return {
				...state,
				todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: true} : todo)
			};

		case 'UNCOMPLETED_TODO':
			return {
				...state,
				todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: false} : todo)
			};

		default:
			return state;
	};

};