import React from 'react'

import s from './AuthButton.module.scss'
import clsx from 'clsx'

interface IButtonProps {
  name?: string
  title?: string
  buttonClasses?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  styleBtn?: React.CSSProperties
  children?: React.ReactNode
}

const AuthButton: React.FC<IButtonProps> = ({
  name,
  title,
  buttonClasses,
  onClick,
  type,
  disabled,
  styleBtn,
  children
}) => {
  const btnClasses = buttonClasses
    ? clsx(s.authButton, buttonClasses?.split(' ').map((item) => s[item]))
    : s.button

  return (
    <button
      className={btnClasses}
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={styleBtn}
      title={title}
    >
      {children}
      {name}
    </button>
  )
}

export default AuthButton
