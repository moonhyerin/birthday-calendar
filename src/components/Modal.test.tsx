import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Modal } from './Modal'

describe('Modal', () => {
  it('should render the button disabled on initial render', () => {
    const setIsOpen = jest.fn()
    const handleSubmit = jest.fn()

    render(<Modal setIsOpen={setIsOpen} handleSubmit={handleSubmit} />)

    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('should render the button disabled if there is no name', () => {
    const setIsOpen = jest.fn()
    const handleSubmit = jest.fn()

    render(<Modal setIsOpen={setIsOpen} handleSubmit={handleSubmit} />)

    fireEvent.change(screen.getByPlaceholderText('DD*'), {
      target: { value: '7' },
    })

    fireEvent.change(screen.getByPlaceholderText('MM*'), {
      target: { value: '3' },
    })

    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('should render the button disabled if there is no day', () => {
    const setIsOpen = jest.fn()
    const handleSubmit = jest.fn()

    render(<Modal setIsOpen={setIsOpen} handleSubmit={handleSubmit} />)

    fireEvent.change(screen.getByPlaceholderText('Name*'), {
      target: { value: 'hailee' },
    })

    fireEvent.change(screen.getByPlaceholderText('MM*'), {
      target: { value: '3' },
    })

    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('should render the button disabled if there is no month', () => {
    const setIsOpen = jest.fn()
    const handleSubmit = jest.fn()

    render(<Modal setIsOpen={setIsOpen} handleSubmit={handleSubmit} />)

    fireEvent.change(screen.getByPlaceholderText('Name*'), {
      target: { value: 'hailee' },
    })

    fireEvent.change(screen.getByPlaceholderText('DD*'), {
      target: { value: '3' },
    })

    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('should show message if the date is invalid', () => {
    const setIsOpen = jest.fn()
    const handleSubmit = jest.fn()

    render(<Modal setIsOpen={setIsOpen} handleSubmit={handleSubmit} />)

    fireEvent.change(screen.getByPlaceholderText('Name*'), {
      target: { value: 'hailee' },
    })

    fireEvent.change(screen.getByPlaceholderText('DD*'), {
      target: { value: '77' },
    })

    fireEvent.change(screen.getByPlaceholderText('MM*'), {
      target: { value: '3' },
    })

    fireEvent.click(screen.getByRole('button'), {})

    expect(screen.getByTestId('message')).toBeVisible()
  })

  it('should render the button enabled', () => {
    const setIsOpen = jest.fn()
    const handleSubmit = jest.fn()

    render(<Modal setIsOpen={setIsOpen} handleSubmit={handleSubmit} />)

    fireEvent.change(screen.getByPlaceholderText('Name*'), {
      target: { value: 'hailee' },
    })

    fireEvent.change(screen.getByPlaceholderText('DD*'), {
      target: { value: '7' },
    })

    fireEvent.change(screen.getByPlaceholderText('MM*'), {
      target: { value: '3' },
    })

    expect(screen.getByRole('button')).toBeEnabled()
  })
})
