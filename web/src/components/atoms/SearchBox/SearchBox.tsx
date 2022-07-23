import { useCallback } from 'react'

import classNames from 'classnames'
import debounce from 'lodash/debounce'

type Props = {
  onSearch: (query: string) => void
  placeholder?: string
  className?: string
}

export const SearchBox: React.FC<Props> = ({
  onSearch,
  placeholder,
  className,
}) => {
  const debounceSearch = useCallback(debounce(onSearch, 250), [])

  const handleChange = ({ target: { value } }) => {
    debounceSearch(value)
  }

  return (
    <input
      className={classNames(
        'p-2',
        'border-2',
        'border-gray-300',
        'rounded-md',
        className
      )}
      placeholder={placeholder ?? 'Start typing...'}
      type={'textbox'}
      onChange={handleChange}
    />
  )
}
