import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Header } from './Header'
import { Modal } from './Modal'

describe('Header', () => {
  it('should render the logo and button on initial render', () => {
    const handleUpdate = jest.fn()

    render(<Header handleUpdate={handleUpdate} />)

    expect(screen.getByTestId('logo')).toBeVisible()
    expect(screen.getByTestId('add')).toBeVisible()
  })

  it('should render the modal if add button clicked', async () => {
    const handleUpdate = jest.fn()

    render(<Header handleUpdate={handleUpdate} />)

    fireEvent.click(screen.getByTestId('add'), {})

    await waitFor(() => expect(screen.getByTestId('modal')))
  })
})
