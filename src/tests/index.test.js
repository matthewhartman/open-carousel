import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import OpenCarousel from '../'

describe('OpenCarousel', () => {
  afterEach(cleanup)
  test('renders', () => {
    const {queryAllByTestId} = render(<OpenCarousel items={[]} />)
    const component = queryAllByTestId('open-carousel')
    expect(component).toBeTruthy()
  })
  test('renders notice if no providers', () => {
    const {getByTestId} = render(<OpenCarousel items={[]} />)
    const component = getByTestId('open-carousel-notice')
    expect(component.textContent).toEqual('No logos provided.')
  })
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
