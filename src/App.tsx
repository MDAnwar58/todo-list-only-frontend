import React, { useState, useEffect } from 'react'
    import TodoList from './components/TodoList'
    import { Moon, Sun } from 'lucide-react'

    function App() {
      const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true' ||
          (!('darkMode' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches),
      )

      useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
      }, [darkMode])

      const toggleDarkMode = () => {
        setDarkMode(!darkMode)
      }

      return (
        <div
          className={`min-h-screen ${
            darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
          } flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
        >
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <TodoList />
        </div>
      )
    }

    export default App
