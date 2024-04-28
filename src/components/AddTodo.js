import { useContext, useState } from "react";
import { TodoContext } from "../store/context";

const AddTodo = () => {

	const {dispatch} = useContext(TodoContext);

	const [inputValue, setInputValue] = useState('');

	const submitHandler = (e) => {
	
		e.preventDefault();

		dispatch({
			type: "ADD_TODO",
			payload: {
				id: Date.now(),
				text: inputValue,
				completed: false,
			} 
		});

		setInputValue('');
	}

	// const inputHandler = (e) => {
	
	// 	e.keyCode === 13 && console.log(e.target.value);
		  // onKeyUp={inputHandler}
	// }


	return (

		<form className="app__form" onSubmit={submitHandler}>
			<input className="app__input" 
			type="text"
			value={inputValue}
			onChange={e => setInputValue(e.target.value)}
			placeholder="Create a new todo..."/>
		</form>
	
	)

}

export default AddTodo;