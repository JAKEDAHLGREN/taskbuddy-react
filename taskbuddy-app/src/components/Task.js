import React, { useState } from 'react'
import TaskForm from './TaskForm'

function Task() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
  return (
    <div>Task</div>
  )
}

export default Task