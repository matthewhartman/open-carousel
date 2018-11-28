import React from 'react'

const OpenCarouselItem = ({ width, height, name, logo, url }) => (
  <a data-testid='open-carousel-item' className='open-carousel-item' href={url}>
    <img alt={name} src={logo} title={name} />
    <style global jsx>{`
      .open-carousel-item {
        width: ${width}px;
        text-align: center;
      }
      .open-carousel-item img {
        max-width: 100%;
        height: ${height}px;
        display: inline-block;
      }
    `}</style>
  </a>
)

export default OpenCarouselItem