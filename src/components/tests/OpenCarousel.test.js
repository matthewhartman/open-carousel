import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import OpenCarousel from '../'

describe('OpenCarousel', () => {
  afterEach(cleanup)
  test('renders correct number of items', () => {
    const items = [
      { name: 'Test', logo: 'test.svg', url: '#' },
      { name: 'Cool', logo: 'cool.svg', url: '#' },
      { name: 'Open', logo: 'open.svg', url: '#' }
    ]
    const {queryAllByTestId} = render(<OpenCarousel items={items} />)
    const component = queryAllByTestId('open-carousel-item')
    expect(component).toHaveLength(6)
  })
})
