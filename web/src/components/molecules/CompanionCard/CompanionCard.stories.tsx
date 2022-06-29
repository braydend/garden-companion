import { CompanionCard } from './CompanionCard'

const plants = [
  { id: '123', name: 'Tomato' },
  { id: '234', name: 'Pumpkin' },
]

export const generated = (args) => {
  return <CompanionCard {...args} plants={args.hasPlants ? plants : []} />
}

export default {
  title: 'Components/Molecules/CompanionCard',
  argTypes: {
    variant: {
      options: ['positive', 'negative'],
      control: { type: 'radio' },
      defaultValue: 'positive',
    },
    hasPlants: {
      control: { type: 'boolean' },
    },
  },
}
