import React, { useState } from "react"
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([
    'TEST1', 'TEST2'
  ])
  const [completeTodos, setCompleteTodos] = useState([
    'TEST3', 'TEST4'
  ])

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value)
  }
  const onClickAdd = () => {
    if (!todoText) return
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }
  const onClickDelete = (index) =>{
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }


  return (
    <>
      <div className="input-area" onChange={onChangeTodoText}>
        <input value={todoText} placeholder="TODOを入力" />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          { incompleteTodos.map((todo, i) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <span>{todo}</span>
                  <button>完了</button>
                  <button onClick={() => onClickDelete(i)}>削除</button>
                </div>
              </li>
            )
          }) }
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map(todo => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <span>{todo}</span>
                  <button>戻す</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}