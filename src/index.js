import React from 'react'
import randomiseArray from './utils/randomiseArray'
import flattenArray from './utils/flattenArray'
import OpenCarouselItem from './components/OpenCarouselItem'

const OpenCarousel = ({
  items,
  speed,
  breakpointWidth,
  itemWidth,
  itemHeight,
  fallbackMessage = 'No logos provided.'
}) => {
  const totalNumberOfItems = items && items.length
  const totalWidthOfItems = (totalNumberOfItems * itemWidth)
  const randomItems = randomiseArray(items)
  const cloneItems = [randomItems, randomItems]
  const listOfItems = flattenArray(cloneItems)
  return (
    <div data-testid='open-carousel' className='open-carousel'>
      { listOfItems.length === 0 ?
        <div data-testid='open-carousel-notice' className="open-carousel-notice">
          {fallbackMessage}
        </div> :
        <div data-testid='open-carousel-items' className='open-carousel-container'>
            { listOfItems.map((item, index) => {
              const { name, logo, url } = item
              return <OpenCarouselItem
                key={`carousel-item-${index}`}
                width={itemWidth}
                height={itemHeight}
                name={name}
                logo={logo}
                url={url}
              />
            })}
        </div>
      }
      <style global jsx>{`
        @keyframes marquee {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-${totalWidthOfItems}px, 0); }
        }
        .open-carousel-notice {
          font-family: sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          height: ${itemHeight}px;
          width: 100%;
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
          animation: marquee ${speed}s linear infinite;
        }
        @media screen and (min-width: ${breakpointWidth}px) {
          .open-carousel {
            overflow: auto;
            height: auto;
          }
          .open-carousel-container {
            animation: none;
            flex-wrap: wrap;
            position: relative;
            justify-content: center;
          }
          .open-carousel-item {
            margin: 15px;
          }
          .open-carousel-item:nth-of-type(1n+${totalNumberOfItems + 1}) {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default OpenCarousel