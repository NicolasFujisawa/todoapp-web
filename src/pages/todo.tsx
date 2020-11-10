import React, { FormEvent, useEffect, useState, ChangeEvent } from 'react'
import { FiChevronDown, FiChevronUp, FiPlus } from 'react-icons/fi'
import { Container } from '../styles/pages/Todo'
import Bg from '../assets/moonlight2.svg'
import Todo from '../model/todo'
import api from '../service/api'
import * as Yup from 'yup'
import DeleteButton from '../components/DeleteButton'
import FinishButton from '../components/FinishButton'

const todoSchema = Yup.object({
  task: Yup.string().required('Tarefa é Obrigatória')
})

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>()
  const [page, setPage] = useState<number>(0)

  const [task, setTask] = useState<string>('')
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [toggle, setToggle] = useState<boolean>(true)

  useEffect(() => {
    api.get(`/v3/todo?page=${page}&size=5`).then(response => {
      setTodos(response.data)
    })
  }, [page, toggle])

  function handlePrev() {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  function handleNext() {
    setPage(page + 1)
  }

  async function handleCreate(event: FormEvent) {
    event.preventDefault()

    const data = new FormData()

    data.append('task', task)
    data.append('is_completed', 'false')
    images.forEach(image => {
      data.append('images', image)
    })

    const todoCandidate = {
      task: task
    }
    await todoSchema.validate(todoCandidate, {
      abortEarly: false
    })

    await api
      .post('/v3/todo', data)
      .then(response => {
        console.log(response)
        setTask('')
        setImages([])
        setPreviewImages([])
        setToggle(!toggle)
      })
      .catch(reason => {
        console.error(reason)
      })
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return

    const selectedImage = Array.from(event.target.files)

    setImages(images.concat(selectedImage))

    const selectedImagesPreview = selectedImage.map(image => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(previewImages.concat(selectedImagesPreview))
  }

  async function handleDelete(id: number) {
    console.log('delete me', id)
    await api.delete(`/v3/todo?id=${id}`).then(response => {
      console.log(response)
      setToggle(!toggle)
    })
  }

  async function handleFinish(id: number) {
    console.log('finish me', id)
    await api.put(`/v3/todo?id=${id}`).then(response => {
      console.log(response)
      setToggle(!toggle)
    })
  }

  return (
    <Container>
      <div className="background">
        <Bg />
      </div>

      <div className="grettings">
        <h1>Página dos seus TODOS</h1>
        <p>Crie, resolva e simplifique sua vida</p>
      </div>

      <div className="content">
        <form onSubmit={handleCreate} className="create-todo-form">
          <fieldset>
            <div className="input-block">
              <input
                type="text"
                className="text"
                placeholder="Adicione sua tarefa"
                onChange={event => setTask(event.target.value)}
                value={task}
              />
            </div>

            <div className="input-block">
              <div className="images-container">
                {previewImages.map(image => {
                  return <img key={image} src={image} alt={name} />
                })}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#000" />
                </label>
              </div>
              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </div>
          </fieldset>

          <button className="confirm-create" type="submit">
            Criar
          </button>
        </form>

        <div className="not-completed">
          <h3>Incompletas</h3>
          {todos?.map(props => {
            if (!props.is_completed) {
              return (
                <div className="task" key={props.id}>
                  <p>{props.task}</p>
                  <DeleteButton action={handleDelete} id={props.id} />
                  <FinishButton action={handleFinish} id={props.id} />
                </div>
              )
            }
            return <></>
          })}
        </div>

        <div className="is-completed">
          <h3>Completas</h3>
          {todos?.map(props => {
            if (props.is_completed) {
              return (
                <div className="task" key={props.id}>
                  <p>{props.task}</p>
                  <DeleteButton action={handleDelete} id={props.id} />
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
