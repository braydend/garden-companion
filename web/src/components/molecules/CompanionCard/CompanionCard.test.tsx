import React, { ComponentProps } from 'react'

import { screen, render } from '@redwoodjs/testing/web'

import { CompanionCard } from './CompanionCard'

type Props = ComponentProps<typeof CompanionCard>

describe('CompanionCard', () => {
  const defaultProps: Props = {
    variant: 'positive',
    plants: [],
  }
  const setUp = (customProps?: Partial<Props>) => {
    const props = {
      ...defaultProps,
      ...customProps,
    }

    return render(<CompanionCard {...props} />)
  }

  it('renders successfully', () => {
    expect(() => {
      setUp()
    }).not.toThrow()
  })

  it.each<[Props['variant'], string]>([
    ['positive', 'Positive Companions'],
    ['negative', 'Negative Companions'],
  ])('renders correct heading: variant %s', (variant, expectedHeading) => {
    setUp({ variant })

    expect(
      screen.getByRole('heading', { level: 3, name: expectedHeading })
    ).toBeInTheDocument()
  })

  it.each<[Props['variant'], string]>([
    ['positive', 'This plant has no positive companions'],
    ['negative', 'This plant has no negative companions'],
  ])(
    'renders correct message when plant list is empty: variant %s',
    (variant, expectedMessage) => {
      setUp({ variant })

      expect(screen.getByText(expectedMessage)).toBeInTheDocument()
    }
  )

  it('it render list of companions correctly', () => {
    const plants = [
      { id: '123', name: 'Tomato' },
      { id: '234', name: 'Pumpkin' },
    ]

    setUp({ plants })

    expect(screen.getAllByRole('listitem')).toHaveLength(plants.length)
    expect(screen.getAllByRole('link')).toHaveLength(plants.length)
    for (const plant of plants) {
      expect(screen.getByRole('link', { name: plant.name })).toBeInTheDocument()
    }
  })
})
