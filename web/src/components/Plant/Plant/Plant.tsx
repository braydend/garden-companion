import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'

import Card from 'src/components/Card/Card'
import Heading from 'src/components/Heading/Heading'

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

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
          <Card variant={'green'}>
            <Heading level={3} label={'Positive Companions'} />
            <div className={'p-8'}>
              {hasPositiveCompanions ? (
                <ul>
                  {plant.positiveCompanions?.map(({ id, name }) => (
                    <li key={id} className={'list-disc'}>
                      <Link
                        to={routes.plant({ id })}
                        title={'Show plant ' + id + ' detail'}
                        className={'hover:underline'}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <span>This plant has no positive companions</span>
              )}
            </div>
          </Card>
          <Card variant={'red'}>
            <Heading level={3} label={'Negative Companions'} />
            <div className={'p-8'}>
              {hasNegativeCompanions ? (
                <ul>
                  {plant.negativeCompanions?.map(({ id, name }) => (
                    <li key={id} className={'list-disc'}>
                      <Link
                        to={routes.plant({ id })}
                        title={'Show plant ' + id + ' detail'}
                        className={'hover:underline'}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <span>This plant has no negative companions</span>
              )}
            </div>
          </Card>
        </section>
      </div>
    </>
  )
}

export default Plant
