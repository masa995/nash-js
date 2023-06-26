import React from 'react'

import './styles.css'

function TaskForm({ onAddTask }) {
  function clearForm(e) {
    e.target.text.value = ''
    e.target.title.value = ''
  }
  function addTask(e) {
    e.preventDefault();
    const formData = new FormData(e.target)

    const newTask = {
      id : String(Math.random()),
      checked: false,
      title: formData.get('title'),
      text: formData.get('text')
    }

    onAddTask(newTask);
    clearForm(e)
  }

  return (
    <form
      onSubmit={(e) => addTask(e)}
      className='todo__form'
      id="form"
    >
      <input
        name="title"
        className='todo__input'
        type='text'
        placeholder='Заголовок'
        required='required'
      />

      <input
        name="text"
        className='todo__input'
        type='text'
        placeholder='Текст'
      />

      <button
        className='todo__button-add'
        type='submit'
      >
        Добавить задачу
      </button>
    </form>
  )
}

export default TaskForm
