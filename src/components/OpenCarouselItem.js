import React from 'react'

const OpenCarouselItem = ({ width = 200, name, logo, url }) => (
  <a data-testid='open-carousel-item' className='open-carousel-item' href={url}>
    <img alt={name} src={logo} title={name} />
    <style jsx>{`
      .open-carousel-item {
        width: ${width}px;
        text-align: center;
      }
    `}</style>
  </a>
)

export default OpenCarouselItem