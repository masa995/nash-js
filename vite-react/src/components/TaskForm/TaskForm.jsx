import React from 'react'

function TaskForm({onAddTask}) {
  const[title, setTitle] = React.useState('');
  const[text, setText] = React.useState('');

  function clearInputs() {
    setTitle('');
    setText('');
  }

  function addTask(e) {
    e.preventDefault();
    let obj = {
      id : Math.random(),
      checked: false,
      title,
      text
    }
    clearInputs();
    onAddTask(obj);
  }
  
  return (
    <form
    onSubmit={(e) => addTask(e)}
    className='todo__form'
  >
   <input
    className='todo__input'
    type='text'
    placeholder='Заголовок'
    required='required'
    value={title}
    onChange={(e) => setTitle(e.target.value)}
   />
  <input
    className='todo__input'
    type='text'
    placeholder='Текст'
    value={text}
    onChange={(e) => setText(e.target.value)}
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