import React, { ComponentProps } from 'react'

import userEvent from '@testing-library/user-event'

import { render, screen } from '@redwoodjs/testing/web'

import { sleep } from 'src/utils/sleep'

import { SearchBox } from './SearchBox'

type Props = ComponentProps<typeof SearchBox>

describe('SearchBox', () => {
  const defaultProps: Props = {
    onSearch: jest.fn(),
  }
  const setUp = (customProps?: Partial<Props>) => {
    const props = {
      ...defaultProps,
      ...customProps,
    }

    return render(<SearchBox {...props} />)
  }
  it('renders successfully', () => {
    const baseClasses = ['p-2', 'border-2', 'border-gray-300', 'rounded-md']
    setUp()

    const searchbox = screen.getByPlaceholderText('Start typing...')
    expect(searchbox).toBeInTheDocument()
    for (const className of baseClasses) {
      expect(searchbox).toHaveClass(className)
    }
  })

  it('allows custom placeholder', () => {
    setUp({ placeholder: 'Custom placeholder' })

    expect(
      screen.getByPlaceholderText('Custom placeholder')
    ).toBeInTheDocument()
  })

  it('debounces the onSearch callback', async () => {
    const mockOnSearch = jest.fn()
    setUp({ onSearch: mockOnSearch })

    await userEvent.type(screen.getByPlaceholderText('Start typing...'), 'This')

    await userEvent.type(
      screen.getByPlaceholderText('Start typing...'),
      'Should'
    )

    await userEvent.type(screen.getByPlaceholderText('Start typing...'), 'Fire')

    await userEvent.type(screen.getByPlaceholderText('Start typing...'), 'Once')

    await sleep(250)

    expect(mockOnSearch).toHaveBeenCalledTimes(1)
    expect(mockOnSearch).toHaveBeenCalledWith('ThisShouldFireOnce')
  })

  it('correctly applies classes', () => {
    setUp({ className: 'foo bar' })

    expect(screen.getByPlaceholderText('Start typing...')).toHaveClass('foo')
    expect(screen.getByPlaceholderText('Start typing...')).toHaveClass('bar')
  })
})
