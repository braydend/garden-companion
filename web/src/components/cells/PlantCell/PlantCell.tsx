import type { FindPlantById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Plant } from 'src/components/organisms'

export const QUERY = gql`
  query FindPlantById($id: String!) {
    plant: plant(id: $id) {
      id
      name
      notes
      positiveCompanions {
        name
        id
      }
      negativeCompanions {
        name
        id
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Plant not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ plant }: CellSuccessProps<FindPlantById>) => {
  return <Plant plant={plant} />
}
