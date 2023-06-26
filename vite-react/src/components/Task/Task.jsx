import React from 'react';
import checkImg from '../../assets/check.svg';

import './styles.css'

function Task({
  onDeleteTask,
  onCompleteTask,
  item,
}) {
  const {id, title, checked, text} = item


  return (
    <li className='todo__item'>
      <div className='todo__item-title-content'>
        <p className='todo__item-title'>
          {title}
        </p>

        <div className='todo__item-title-box'>
          <input
            className='todo__item-checkbox'
            type='checkbox'
            id={id}
            checked={checked}
            onChange={(e) => onCompleteTask(id, e.target.checked)}
          />

          <label
            className='todo__item-label'
            htmlFor={id}
          >
            <img src={checkImg} alt="Выполнено" />
          </label>

          <button
            className='todo__item-delete'
            type='button'
            onClick={() => onDeleteTask(id)}
          >
            X
          </button>
        </div>
      </div>

      <div className='todo__item-text'>
        <p className='todo__text'>
          {text}
        </p>
      </div>
    </li>
  )
}

export default Task
