import React, { ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import s from './Button.module.scss'

type LinkProps = {
  to: string
  component: 'link'
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  component?: 'button'
}

type CommonProps = {
  name?: string
  buttonClasses?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  selected?: boolean
  startIcon?: React.ReactNode
  styleBtn?: React.CSSProperties
  children?: React.ReactNode
}

type Props = CommonProps & (LinkProps | ButtonProps)

const Button: React.FC<Props> = ({
  name,
  buttonClasses,
  onClick,
  type,
  disabled,
  styleBtn,
  children,
  startIcon,
  component = 'button',
  ...otherProps
}) => {
  const btnClasses = buttonClasses
    ? clsx(
        s.button,
        buttonClasses?.split(' ').map((item) => s[item])
      )
    : s.button

  const renderButtonContent = () => (
    <>
      {startIcon && <div className={s.buttonIcon}>{startIcon}</div>}
      {children}
    </>
  )

  if (component === 'link') {
    const { to, handleMouseEnter, handleMouseLeave, ...linkProps } = otherProps as LinkProps
    return (
      <Link
        to={to}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...linkProps}
        className={btnClasses}
        onClick={onClick}
        style={styleBtn}
      >
        {renderButtonContent()}
        {children}
        {name}
      </Link>
    )
  }

  return (
    <button
      className={btnClasses}
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={styleBtn}
    >
      {renderButtonContent()}
      {children}
      {name}
    </button>
  )
}

export default Button
