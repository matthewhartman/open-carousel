import React from 'react'
import ReactDOM from 'react-dom' 
import OpenCarousel from '../../../src/'
import items from '../mock-data/items'

const App = () => (
  <OpenCarousel
    speed={10}
    items={items}
    breakpointWidth={720}
    itemWidth={200}
    itemHeight={60}
  />
)

ReactDOM.render(<App />, document.getElementById('root'))