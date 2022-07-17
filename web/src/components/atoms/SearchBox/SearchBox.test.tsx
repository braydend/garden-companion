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
    setUp()

    expect(screen.getByPlaceholderText('Start typing...')).toBeInTheDocument()
  })

  it('allows custom placeholder', () => {
    setUp({ placeholder: 'Custom placeholder' })

    expect(
      screen.getByPlaceholderText('Custom placeholder')
    ).toBeInTheDocument()
  })

  // it('calls onSearch with contents', async () => {
  //   const mockOnSearch = jest.fn()
  //   setUp({ onSearch: mockOnSearch })
  //
  //   await userEvent.type(
  //     screen.getByPlaceholderText('Start typing...'),
  //     'Dummy Search'
  //   )
  //
  //   await sleep(250)
  //
  //   expect(mockOnSearch).toHaveBeenCalledWith('Dummy Search')
  // })

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
})
