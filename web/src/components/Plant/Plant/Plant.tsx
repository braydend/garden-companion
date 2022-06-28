import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'

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

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">{plant.name}</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Notes</th>
              <td>{plant.notes ?? '-'}</td>
            </tr>
          </tbody>
        </table>

        <section className={'bg-lime-200 p-4 w-1/2'}>
          <h2 className={'text-2xl'}>Positive Companions</h2>
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
        </section>
      </div>
    </>
  )
}

export default Plant
