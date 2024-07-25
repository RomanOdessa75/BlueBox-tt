import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import s from './SearchInput.module.scss'
// import SearchIcon from "src/images/svg/SearchIcon"

interface IProps {
  onChange: (value: string) => void
}

const SearchInput: React.FC<IProps> = ({ onChange }) => {
  return (
    <div className={s.searchInputContainer}>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        onChange={(e) => onChange(e.target.value)}
        className={s.searchInput}
      />

      {/* <SearchIcon className={s.searchIcon} /> */}
    </div>
  )
}

export default SearchInput
