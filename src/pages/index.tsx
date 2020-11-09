import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import TodoWoman from '../assets/todo_woman.svg'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Todo app</title>
      </Head>
      <div className="background">
        <TodoWoman />
      </div>
      <div className="content">
        <h1>Todo App</h1>
        <p>Resolva TODOS sem nenhum obstáculo</p>
        <Link href="/todo" passHref>
          <button>Começar</button>
        </Link>
      </div>
    </Container>
  )
}

export default Home
