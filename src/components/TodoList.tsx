import React, { useState } from 'react'
    import TodoItem from './TodoItem'
    import { Plus } from 'lucide-react'

    interface Todo {
      id: string
      text: string
      completed: boolean
    }

    const TodoList: React.FC = () => {
      const [todos, setTodos] = useState<Todo[]>([
        { id: '1', text: 'Learn React', completed: true },
        { id: '2', text: 'Build a Todo App', completed: false },
      ])
      const [newTodoText, setNewTodoText] = useState('')

      const addTodo = () => {
        if (newTodoText.trim() !== '') {
          const newTodo = {
            id: Date.now().toString(),
            text: newTodoText,
            completed: false,
          }
          setTodos([...todos, newTodo])
          setNewTodoText('')
        }
      }

      const toggleTodo = (id: string) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        )
      }

      const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id))
      }

      const updateTodo = (id: string, newText: string) => {
        setTodos(
          todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
        )
      }

      return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">My Todos</h1>
          <div className="flex mb-4">
            <input
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              placeholder="Add a new todo"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              onClick={addTodo}
              className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <Plus size={20} />
            </button>
          </div>
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onUpdate={updateTodo}
              />
            ))}
          </ul>
        </div>
      )
    }

    export default TodoList
