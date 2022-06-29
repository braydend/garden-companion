import { Heading } from './Heading'

export const generated = (args) => <Heading {...args} />

export default {
  title: 'Components/Atoms/Heading',
  argTypes: {
    level: {
      options: [1, 2, 3, 4, 5],
      control: { type: 'radio' },
      defaultValue: 1,
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Dummy Heading',
    },
  },
}
