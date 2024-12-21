import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = () => {
  // State for storing todo list items
  const [todos, setTodos] = useState([
    { id: 1, name: 'Learn React', status: 'Pending' },
    { id: 2, name: 'Complete Todo App', status: 'Pending' }
  ]);

  // State for new todo item
  const [newTodo, setNewTodo] = useState('');

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, name: newTodo, status: 'Pending' }]);
      setNewTodo('');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h3 className="text-center mb-4">Todo List</h3>
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter new todo" 
              value={newTodo} 
              onChange={(e) => setNewTodo(e.target.value)} 
            />
            <button className="btn btn-primary" onClick={addTodo}>
              Add Todo
            </button>
          </div>
          <ul className="list-group">
            {todos.map(todo => (
              <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                {todo.name}
                <span className={`badge ${todo.status === 'Pending' ? 'bg-warning' : 'bg-success'}`}>
                  {todo.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
