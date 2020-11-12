import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .background {
    opacity: 0.4;
    position: absolute;
    height: auto;
    width: auto;
    overflow: hidden;
    resize: horizontal;
    z-index: -5;
  }

  .background svg {
    height: 930px;
    overflow: hidden;
    width: 1830px;
  }

  .grettings {
    margin-right: 120px;
  }

  .grettings h1 {
    margin-bottom: 40px;
  }

  .content {
    width: 800px;
    background-color: rgba(33, 34, 36, 0.8);
    padding: 36px;
    border-radius: 8px;
  }

  .create-todo-form {
    display: flex;
  }

  .create-todo-form fieldset {
    border: 0;
    width: 100%;
  }

  .create-todo-form .input-block .images-container {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 16px;
  }

  .create-todo-form .input-block .images-container img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 8px;
  }

  .create-todo-form .input-block .new-image {
    width: 80%;
    height: 40px;
    background: rgba(123, 124, 126, 0.8);
    border: 3px solid rgba(73, 74, 76, 0.8);
    border-radius: 8px;
    cursor: pointer;
    transition: filter 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .create-todo-form .input-block input[type='file'] {
    display: none;
  }

  .create-todo-form .input-block {
    width: 100%;
  }
  .create-todo-form .input-block + .input-block {
    margin-top: 10px;
  }

  .create-todo-form .input-block .text {
    width: 100%;
    border: none;
    border-bottom: 3px solid #555;
    background: none;
    padding: 10px;
    color: ${props => props.theme.colors.text};
  }

  .create-todo-form .confirm-create {
    width: 70px;
    height: 48px;
    cursor: pointer;
    background: ${props => props.theme.colors.green};
    border: 3px solid #41a363;
    border-radius: 8px;
    padding: 4px;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    transition: filter 0.2s;
    margin-left: 10px;
  }

  h3 {
    margin: 10px 0;
  }

  .task {
    display: flex;
    align-self: center;
    justify-content: space-between;
    width: 100%;
    height: 65px;
    background: rgba(122, 124, 125, 0.7);
    padding: 18px;
    margin: 5px 0;
    border-radius: 8px;
    overflow: hidden;
  }

  .task .task-data {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .task .task-data .display-image {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    margin-left: 10px;
  }

  .task .task-data .display-image:hover {
    box-shadow: 0px 0px 10px rgba(33, 34, 36, 0.7);
  }

  .task .task-data .display-image img {
  }

  .task i {
    float: right;
    margin-left: 20px;
    cursor: pointer;
  }

  .is-completed .task {
    background: rgba(0, 0, 0, 0.5);
  }

  .page-manager {
    float: right;
  }

  .page-manager button {
    cursor: pointer;
    background: rgba(123, 124, 126, 0.8);
    border: 3px solid rgba(73, 74, 76, 0.8);
    border-radius: 8px;
    width: 40px;
    height: 40px;
    padding: 4px;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    transition: filter 0.2s;
  }

  .page-manager button + button {
    margin-left: 10px;
  }

  button:hover {
    filter: brightness(117%);
  }

  label.new-image:hover {
    filter: brightness(117%);
  }
`
