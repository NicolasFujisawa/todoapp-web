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

  .grettings {
    margin-right: 120px;
  }

  .content {
    width: 800px;
    background-color: rgba(33, 34, 36, 0.8);
    padding: 36px;
    border-radius: 8px;
  }

  .content .text {
    width: 100%;
    border: none;
    border-bottom: 3px solid #555;
    background: none;
    padding: 10px;
    color: ${props => props.theme.colors.text};
  }

  h3 {
    margin: 10px 0;
  }

  .task {
    width: 100%;
    background: rgba(122, 124, 125, 0.7);
    padding: 18px;
    margin: 5px 0;
    border-radius: 8px;
    overflow: hidden;
  }

  .task p {
    float: left;
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
`
