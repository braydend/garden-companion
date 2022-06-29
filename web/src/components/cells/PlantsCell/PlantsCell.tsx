import type { FindPlants } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { PlantsList } from 'src/components/organisms'

export const QUERY = gql`
  query FindPlants {
    plants {
      id
      name
      notes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="rw-text-center">{'No plants yet. '}</div>
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ plants }: CellSuccessProps<FindPlants>) => {
  return <PlantsList plants={plants} />
}
