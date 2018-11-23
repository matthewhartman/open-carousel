import React from 'react'
import randomiseArray from './utils/randomiseArray'
import flattenArray from './utils/flattenArray'
import OpenCarouselItem from './components/OpenCarouselItem'

const OpenCarousel = ({ items, speed, breakPointWidth, itemWidth, itemHeight }) => {
  const totalNumberOfItems = items && items.length
  const totalWidthOfItems = (totalNumberOfItems * itemWidth)
  const randomItems = randomiseArray(items)
  const cloneItems = [randomItems, randomItems]
  const listOfItems = flattenArray(cloneItems)
  return (
    <div data-testid='open-carousel' className='open-carousel'>
      <div className='open-carousel-container'>
        { listOfItems.map((item, index) => {
          const { name, logo, url } = item
          return <OpenCarouselItem
            key={`carousel-item-${index}`}
            width={itemWidth}
            name={name}
            logo={logo}
            url={url}
          />
        }) }
      </div>
      <style jsx='true'>{`
        @keyframes marquee {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-${totalWidthOfItems}px, 0); }
        }
        .open-carousel {
          height: ${itemHeight}px;
          overflow: hidden;
          position: relative;
          margin: 0 auto;
        }
        .open-carousel-container {
          position: absolute;
          display: flex;
          animation: marquee ${speed} linear infinite;
        }
        @media screen and (min-width: ${breakPointWidth}px) {
          .open-carousel {
            overflow: auto;
          }
          .open-carousel-container {
            height: auto;
          }
          .open-carousel-container {
            animation: none;
            flex-wrap: wrap;
            position: relative;
            justify-content: center;
          }
          .open-carousel-container a { margin: 5px; }
          .open-carousel-container a:nth-of-type(1n+${totalNumberOfItems + 1}) {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default OpenCarousel