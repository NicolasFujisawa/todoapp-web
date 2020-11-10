import { FiCheckCircle } from 'react-icons/fi'
import React, { useState } from 'react'
import theme from '../styles/theme'

export default function FinishButton(props: { action: any; id: number }) {
  const [level, setLevel] = useState(0)
  const [color, setColor] = useState('#e7dddd')
  const { action, id } = props

  function handleClick() {
    setLevel(level + 1)
    if (level === 0) {
      setColor(theme.colors.green)
    }
    if (level === 1) {
      action(id)
      setLevel(0)
      setColor('#e7dddd')
    }
  }

  return (
    <i onClick={handleClick}>
      <FiCheckCircle size={24} color={color} />
    </i>
  )
}
