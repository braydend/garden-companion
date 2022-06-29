import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { Heading } from 'src/components/atoms'

type PlantLayoutProps = {
  children: React.ReactNode
}

const PlantsLayout = ({ children }: PlantLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <Link to={routes.plants()} className="rw-link">
          <Heading level={1} label={'All Plants'} />
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default PlantsLayout
