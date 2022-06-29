import { Link, routes } from '@redwoodjs/router'

import { Card, Heading } from 'src/components/atoms'
import { CompanionCard } from 'src/components/molecules'

const Plant = ({ plant }) => {
  const hasPositiveCompanions = plant.positiveCompanions.length > 0
  const hasNegativeCompanions = plant.negativeCompanions.length > 0

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <Heading level={2} label={plant.name} />
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Notes</th>
              <td>{plant.notes ?? '-'}</td>
            </tr>
          </tbody>
        </table>

        <section className={'grid grid-cols-2 gap-2'}>
          <CompanionCard
            variant={'positive'}
            plants={plant.positiveCompanions}
          />
          <CompanionCard
            variant={'negative'}
            plants={plant.negativeCompanions}
          />
        </section>
      </div>
    </>
  )
}

export default Plant
