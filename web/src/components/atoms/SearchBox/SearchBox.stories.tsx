import { SearchBox } from './SearchBox'

export const generated = () => {
  return (
    <SearchBox
      onSearch={(query) => console.log(`onSearch called with: ${query}`)}
    />
  )
}

export default { title: 'Components/Atoms/SearchBox' }
