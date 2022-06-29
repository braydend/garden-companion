import { Link, routes } from '@redwoodjs/router'

import { Heading } from 'src/components/atoms'

type PlantLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: PlantLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <header className="rw-header">
        <Link to={routes.plants()} className="rw-link">
          <Heading level={1} label={'Garden Companion'} />
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default DefaultLayout
