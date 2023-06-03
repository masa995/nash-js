import React from 'react'
import './App.css'

import { TaskForm, Task } from './components'

function App() {
  const [list, setList] = React.useState([]);

  function onAddTask(obj) {
    const newList = [...list, obj];
    setList(newList);
  }

  function onDeleteTask(id) {
    if(confirm('Вы действительно хотите удалить задачу?')){
      const newList = list.filter((obj) => {
        if(obj.id !== id){
          return true;
        }
      });
      setList(newList);
    }
  }

    function onCompleteTask(id, checked) {
      const newList = list.map((obj) => {
        if(obj.id === id) {
          obj.checked = checked;
        }
        return obj
      });
      setList(newList);
    }

  return (
    <div 
      className='todo__container'
    >
      <TaskForm
        onAddTask= {onAddTask}
      />
      <ul
        className='todo__list'
      >
        {
          list.length !== 0 && list.map((elem, index) => (
            <Task
              onDeleteTask={onDeleteTask}
              onCompleteTask={onCompleteTask}
              key={index}
              {...elem}
            />
          ))
        }
      </ul>
      { list.length === 0 && 
      <p 
        className=''>
        Задач нет
      </p>}
    </div>
  )
}

export default App
