import Card from './Card'

export const generated = (args) => {
  return (
    <Card {...args}>
      <p>Foo</p>
    </Card>
  )
}

export default {
  title: 'Components/Atoms/Card',
  argTypes: {
    variant: {
      options: ['green', 'red'],
      control: { type: 'radio' },
      defaultValue: 'green',
    },
  },
}
