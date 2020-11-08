import React, { useEffect, useState } from 'react'
import {
  FiTrash2,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi'
import { Container } from '../styles/pages/Todo'
import Bg from '../assets/moonlight.svg'
import Todo from '../model/todo'
import api from '../service/api'

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>()
  const [page, setPage] = useState<number>(0)

  useEffect(() => {
    api.get(`/v3/todo?page=${page}&size=5`).then(response => {
      setTodos(response.data)
    })
  }, [page])

  function handlePrev() {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  function handleNext() {
    setPage(page + 1)
  }

  return (
    <Container>
      <div className="background">
        <Bg />
      </div>
      <div className="grettings">
        <h1>Todo Page</h1>
        <p>Metas de todos? assine o premium</p>
      </div>
      <div className="content">
        <form action="">
          <input type="text" className="text" placeholder="Adicione uma task" />
          <button>Create</button>
        </form>
        <div className="not-completed">
          <h3>Not Completed</h3>
          {todos?.map(props => {
            console.log(props.is_completed)
            console.log(page)
            if (!props.is_completed) {
              return (
                <div className="task" key={props.id}>
                  <p>{props.task}</p>
                  <i>
                    <FiTrash2 size={24} />
                  </i>
                  <i>
                    <FiCheckCircle size={24} />
                  </i>
                </div>
              )
            }
            return <></>
          })}
        </div>
        <div className="is-completed">
          <h3>Completed</h3>
          {todos?.map(props => {
            console.log(props.is_completed)
            console.log(page)
            if (props.is_completed) {
              return (
                <div className="task" key={props.id}>
                  <p>{props.task}</p>
                  <i>
                    <FiTrash2 size={24} />
                  </i>
                  <i>
                    <FiCheckCircle size={24} />
                  </i>
                </div>
              )
            }
            return <></>
          })}
        </div>
        <div className="page-manager">
          <button onClick={handlePrev}>
            <FiChevronUp size={26} />
          </button>
          <button onClick={handleNext}>
            <FiChevronDown size={26} />
          </button>
        </div>
      </div>
    </Container>
  )
}

export default TodoPage
