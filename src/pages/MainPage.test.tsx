import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { MainPage } from './MainPage'

describe('MainPage', () => {
  it('should render elements if data existed', () => {
    const data = [
      {
        name: '',
        month: '1',
        day: '1',
      },
    ]
    const removeData = jest.fn()

    render(<MainPage data={data} removeData={removeData} />)

    expect(screen.getByTestId('birthday-element')).toBeVisible()
  })
})
