import React, { InputHTMLAttributes, ReactNode, useMemo } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import s from './GlobalSearch.module.scss'

export type InputProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<T> & {
    icon?: ReactNode
    resetField?: () => void
    handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  }

export type InputStatus = 'normal' | 'filled' | 'error'

const GlobalSearch = <T extends FieldValues>({
  name,
  control,
  className,
  handleKeyDown,
  ...props
}: InputProps<T>) => {
  const { field } = useController<T>({ name, control })

  const status = useMemo<InputStatus>(() => {
    if (field.value) {
      return 'filled'
    }
    return 'normal'
  }, [field.value])

  return (
    <div className={`${s.group} ${className || ''}`} data-status={status}>
      <label className={s.label}>
        <span className={s['input-group']}>
          <input
            className={s.input}
            {...field}
            onKeyDown={handleKeyDown && handleKeyDown}
            {...props}
          />
        </span>
      </label>
    </div>
  )
}

export default GlobalSearch
