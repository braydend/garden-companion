import { useCallback } from 'react'

import debounce from 'lodash/debounce'

type Props = {
  onSearch: (query: string) => void
  placeholder?: string
}

export const SearchBox: React.FC<Props> = ({ onSearch, placeholder }) => {
  const debounceSearch = useCallback(debounce(onSearch, 250), [])

  const handleChange = ({ target: { value } }) => {
    debounceSearch(value)
  }

  return (
    <input
      placeholder={placeholder ?? 'Start typing...'}
      type={'textbox'}
      onChange={handleChange}
    />
  )
}
