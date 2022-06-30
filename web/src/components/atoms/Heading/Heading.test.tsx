import React, { ComponentProps } from 'react'

import { screen, render } from '@redwoodjs/testing/web'

import { Heading } from './Heading'

type Props = ComponentProps<typeof Heading>

describe('Heading', () => {
  const defaultProps: Props = {
    level: 1,
    label: 'Dummy Heading',
  }
  const setUp = (customProps?: Partial<Props>) => {
    const props = {
      ...defaultProps,
      ...customProps,
    }

    return render(<Heading {...props} />)
  }

  it.each<[Props['level'], Props['label']]>([
    [1, 'Level One Heading'],
    [2, 'Level Two Heading'],
    [3, 'Level Three Heading'],
    [4, 'Level Four Heading'],
    [5, 'Level Five Heading'],
  ])('Renders correct level: level %d', (level, label) => {
    setUp({ level, label })

    expect(
      screen.getByRole('heading', { level, name: label })
    ).toBeInTheDocument()
  })

  it.each<[Props['level'], string]>([
    [1, 'text-5xl'],
    [2, 'text-4xl'],
    [3, 'text-3xl'],
    [4, 'text-2xl'],
    [5, 'text-xl'],
  ])('applies classnames correctly: level %d', (level, implicitClass) => {
    setUp({ level, className: 'foo' })

    expect(screen.getByRole('heading')).toHaveClass('foo')
    expect(screen.getByRole('heading')).toHaveClass(implicitClass)
  })
})
