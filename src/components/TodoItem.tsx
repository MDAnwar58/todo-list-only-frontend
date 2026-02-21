import React, { useState } from 'react'
    import { Check, Edit, Trash2, Save, X } from 'lucide-react'

    interface TodoItemProps {
      id: string
      text: string
      completed: boolean
      onToggle: (id: string) => void
      onDelete: (id: string) => void
      onUpdate: (id: string, newText: string) => void
    }

    const TodoItem: React.FC<TodoItemProps> = ({
      id,
      text,
      completed,
      onToggle,
      onDelete,
      onUpdate,
    }) => {
      const [isEditing, setIsEditing] = useState(false)
      const [editText, setEditText] = useState(text)

      const handleToggle = () => {
        onToggle(id)
      }

      const handleDelete = () => {
        onDelete(id)
      }

      const handleEdit = () => {
        setIsEditing(true)
      }

      const handleSave = () => {
        onUpdate(id, editText)
        setIsEditing(false)
      }

      const handleCancel = () => {
        setEditText(text)
        setIsEditing(false)
      }

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditText(e.target.value)
      }

      return (
        <li className="flex items-center justify-between py-2 border-b border-gray-200 last:border-none">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleToggle}
              className={`p-2 rounded-full focus:outline-none ${
                completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {completed ? <Check size={16} /> : null}
            </button>
            {isEditing ? (
              <input
                type="text"
                value={editText}
                onChange={handleChange}
                className="px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className={`text-gray-700 ${completed ? 'line-through' : ''}`}>
                {text}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {isEditing ? (
              <>
                <button onClick={handleSave} className="text-green-500 hover:text-green-700">
                  <Save size={20} />
                </button>
                <button onClick={handleCancel} className="text-red-500 hover:text-red-700">
                  <X size={20} />
                </button>
              </>
            ) : (
              <>
                <button onClick={handleEdit} className="text-blue-500 hover:text-blue-700">
                  <Edit size={20} />
                </button>
                <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
                  <Trash2 size={20} />
                </button>
              </>
            )}
          </div>
        </li>
      )
    }

    export default TodoItem
