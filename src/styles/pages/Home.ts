import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .background {
    width: 1100px;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
  }

  p {
    margin-top: 24px;
    margin-bottom: 64px;
    font-size: 24px;
    line-height: 32px;
  }

  a {
    width: 100%;
    height: 64px;
    margin-top: 64px;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    width: 100%;
    height: 64px;
    background: ${props => props.theme.colors.primary};
    border-radius: 8px;
    border: 3px solid ${props => props.theme.colors.secondary};
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;

    transition: filter 0.2s;
  }

  button:hover {
    filter: brightness(117%);
  }
`
