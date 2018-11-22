# Open Carousel

## Overview

A simple, responsive component for showcasing clients or customers.

On each page load, the order of the logos are random to make sure there are no favourites :)

When on small screen sizes (breakpoint can be set via prop), the carousel animation will fire. If screen size exceeds the breakpoint, logos stack up without animations.  

## Installation

...

## Usage

```
  <Carousel
    speed='5s'              // sets speed of carousel in seconds
    items={items}           // an array of item objects with {name, logo, url}
    breakPointWidth={720}   // the breakpoint which the carousel stops and logos stack
    itemWidth={200}         // the width of each carousel item
    itemHeight={60}         // the height of each carousel item
  />
```

## License

Code released under the [MIT Open Source](https://opensource.org/licenses/MIT) license.