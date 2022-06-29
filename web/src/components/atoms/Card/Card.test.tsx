import { ComponentProps } from 'react'

import { screen } from '@redwoodjs/testing/web'

import { setUpComponentTest } from 'src/utils/testUtils'

import Card from './Card'

type Props = ComponentProps<typeof Card>

describe('Card', () => {
  const setUp = setUpComponentTest<Props>(Card, {
    variant: 'green',
  })

  it.each<[Props['variant'], string[]]>([
    ['green', ['bg-emerald-200', 'border-emerald-400']],
    ['red', ['bg-red-200', 'border-red-400']],
  ])('applies classnames correctly: variant %s', (variant, expectedClasses) => {
    const baseClasses = ['border-2', 'rounded', 'p-6']
    setUp({ variant, children: <>foo</>, className: 'testClass' })

    expect(screen.getByText('foo')).toHaveClass('testClass')
    for (const expectedClass of expectedClasses) {
      expect(screen.getByText('foo')).toHaveClass(expectedClass)
    }
    for (const baseClass of baseClasses) {
      expect(screen.getByText('foo')).toHaveClass(baseClass)
    }
  })
})
