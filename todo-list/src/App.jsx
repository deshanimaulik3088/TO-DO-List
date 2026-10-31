
import { useState } from 'react'
import './App.css'

function App() {
  // Store the tasks displayed on the page
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React basics' },
    { id: 2, text: 'Build my first React app' }
  ])

  // Store what the user types in the input
  const [newTask, setNewTask] = useState('')

  // Add a new task
  function addTask(event) {
    event.preventDefault()

    const trimmedTask = newTask.trim()

    if (trimmedTask === '') {
      return
    }

    const task = {
      id: Date.now(),
      text: trimmedTask
    }

    setTasks(previousTasks => [...previousTasks, task])
    setNewTask('')
  }

  // Delete a task
  function deleteTask(id) {
    setTasks(previousTasks =>
      previousTasks.filter(task => task.id !== id)
    )
  }

  return (
    <div className="app">
      <h1>TaskFlow</h1>
      <p className="subtitle">
        Organize your day, one task at a time.
      </p>

      <form className="task-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="What do you need to do?"
          value={newTask}
          onChange={event => setNewTask(event.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>

      <div className="task-list">
        {tasks.map(task => (
          <div className="task" key={task.id}>
            <span>{task.text}</span>

            <button
              className="delete-btn"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
