import { Plant as GQLPlant } from 'types/graphql'

import { Heading } from 'src/components/atoms'
import { CompanionCard } from 'src/components/molecules'

type Props = {
  plant: Omit<
    GQLPlant,
    'negativeCompanionsRelation' | 'positiveCompanionsRelation'
  >
}

export const Plant: React.FC<Props> = ({ plant }) => {
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
