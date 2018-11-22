import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import OpenCarouselItem from '../OpenCarouselItem'

describe('OpenCarouselItem', () => {
  afterEach(cleanup)
  test('renders', () => {
    const {queryAllByTestId} = render(
      <OpenCarouselItem name='Test' logo='test.svg' url='#' />
    )
    const component = queryAllByTestId('open-carousel-item')
    expect(component).toHaveLength(1)
  })
})
