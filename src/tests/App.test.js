import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import App from '../App'

describe('App', () => {
  afterEach(cleanup)
  test('renders', () => {
    const {getByTestId} = render(<App />)
    const component = getByTestId('open-carousel')
    expect(component).toBeTruthy()
  })
})
