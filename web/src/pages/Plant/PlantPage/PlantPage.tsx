import PlantCell from 'src/components/cells/PlantCell'

type PlantPageProps = {
  id: string
}

const PlantPage = ({ id }: PlantPageProps) => {
  return <PlantCell id={id} />
}

export default PlantPage
