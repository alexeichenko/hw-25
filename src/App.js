import './App.scss';
import { useReducer } from 'react';
import { todoReducer } from './store/reducer';
import { initialState } from './store/state';
import { TodoContext } from './store/context';
import TodoList from "./components/TodoList";

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoList />
    </TodoContext.Provider>
  );
}

export default App;
