import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Alert } from './Alert'

describe('Alert', () => {
  it('should render the alert div on initial render', () => {
    const date = { name: '', month: '1', day: '1' }
    const indexOfAlert = 0
    const onClose = jest.fn()

    render(<Alert date={date} indexOfAlert={indexOfAlert} onClose={onClose} />)

    expect(screen.getByTestId('alert')).toBeVisible()
  })
})
