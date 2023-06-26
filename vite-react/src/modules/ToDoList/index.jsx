import React, { useState } from "react";
import {
  Task,
  TaskForm
} from "../../components";

import './styles.css'

function ToDoList() {
  const [list, setList] = useState([]);

  function onAddTask(obj) {
    setList(prev => [...prev, obj]);
  }

  function onDeleteTask(id) {
    const confirmMessage = 'Вы действительно хотите удалить задачу?'
    const confirmed = confirm(confirmMessage)
    if (confirmed) {
      const newList = list.filter((obj) => obj.id !== id);
      setList(newList);
    }
  }

  function onCompleteTask(id) {
    const newList = [...list];
    const currentItem = newList.find(item => item.id === id)
    currentItem.checked = !currentItem.checked
    setList(newList);
  }

  const renderTasks = () => {
    if (!list.length) return (
      <p className=''>
        Задач нет
      </p>
    )

    const taskList = list.map((elem) => (
      <Task
        onDeleteTask={onDeleteTask}
        onCompleteTask={onCompleteTask}
        key={elem.id}
        item={elem}
      />
    ))

    return (
      <ul className='todo__list'>
        {taskList}
      </ul>
    )
  }

  return (
    <div className='todo__container'>
      <TaskForm onAddTask= {onAddTask} />

      {renderTasks()}
    </div>
  )
}

export default ToDoList
