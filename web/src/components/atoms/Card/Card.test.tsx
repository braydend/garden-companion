import React, { ComponentProps } from 'react'

import { screen, render } from '@redwoodjs/testing/web'

import { Card } from './Card'

type Props = ComponentProps<typeof Card>

describe('Card', () => {
  const defaultProps: Props = {
    variant: 'green',
  }
  const setUp = (customProps?: Partial<Props>) => {
    const props = {
      ...defaultProps,
      ...customProps,
    }

    return render(<Card {...props} />)
  }

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
