import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'

import { SearchBox } from 'src/components/atoms/SearchBox'

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

export const PlantsList = ({ plants }) => {
  const [filteredPlants, setFilteredPlants] = useState(plants)

  return (
    <>
      <SearchBox
        className={'w-full'}
        placeholder={'Search for a plant...'}
        onSearch={(query) =>
          setFilteredPlants(
            plants.filter(({ name }) =>
              name.toLowerCase().includes(query.toLowerCase())
            )
          )
        }
      />
      <div className={'w-full border-2 border-gray-300 rounded-md mt-2'}>
        <table className="table-auto w-full">
          <thead className={'bg-gray-200'}>
            <tr className={'border-b-2 border-gray-300'}>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlants.map((plant) => (
              <tr key={plant.id}>
                <td className={'border-b-2 p-2'}>
                  <Link
                    to={routes.plant({ id: plant.id })}
                    title={'Show plant ' + plant.id + ' detail'}
                    className="hover:underline"
                  >
                    {truncate(plant.name)}{' '}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
