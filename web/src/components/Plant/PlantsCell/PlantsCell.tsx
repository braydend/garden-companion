import type { FindPlants } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Plants from 'src/components/Plant/Plants'

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
  return (
    <div className="rw-text-center">
      {'No plants yet. '}
      <Link
        to={routes.newPlant()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ plants }: CellSuccessProps<FindPlants>) => {
  return <Plants plants={plants} />
}
