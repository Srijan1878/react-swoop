# react-swoop

> A package that makes building beautiful carousels incredibly easy.

[![NPM](https://img.shields.io/npm/v/react-image-carousel.svg)](https://www.npmjs.com/package/react-image-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-swoop
```

## Usage

```jsx
import React, { Component } from 'react'

import { Carousel } from 'react-swoop'

const App = () => {
  const config = {
    showTabs: true,
    loop: false,
    auto: false,
    animationType: 'fade'
  }

  return (
    <Carousel config={config} active={1}>
      <Carousel.Content>
        <img src={'http://placekitten.com/200/300'} />
      </Carousel.Content>
      <Carousel.Content>
        <img src={'http://placekitten.com/200/301'} />
      </Carousel.Content>
    </Carousel>
  )
}
```

<h3>OR</h3>

```jsx
import React, { Component } from 'react'

import { Carousel } from 'react-swoop'

const App = () => {
  const config = {
    showTabs: true,
    loop: false,
    auto: false,
    animationType: 'fade'
  }

  return (
    <Carousel config={config} active={1}>
      <div>
        <img src={'http://placekitten.com/200/300'} />
      </div>
      <div>
        <img src={'http://placekitten.com/200/301'} />
      </div>
    </Carousel>
  )
}
```

  <h3>The Carousel Component takes in two parameters, active and config</h3>
  <ul>
  <li> active: String, It denotes the index of the active slide. </li>
 
<li>
<p>The config prop is an object and can have multiple fields that will determine the behavior of the Carousel, Detailed description of the props is given below</p>
  <table>
    <thead>
      <th>Prop Name</th>
      <th>Prop Type</th>
      <th>Prop Description</th>
    </thead>
    <tbody>
    <tr>
    <td>showTabs</td>
    <td>Boolean</td>
    <td>Toggling this option will let turn on or off the visiblity for the dots shown on the bottom of the Carousel</td>
    </tr>
    <tr>
    <td>auto</td>
    <td>Boolean</td>
    <td>Passing this option as true will turn on the feature of auto-switching between slides after an interval.</td>
    </tr>
    <tr>
    <td>interval</td>
    <td>Boolean</td>
    <td>Passing this option as true will turn on the feature of auto-switching between slides after an interval.</td>
    </tr>
    <tr>
    <td>animationType</td>
    <td>String</td>
    <td>This denotes the type of animation you want to see while switching between slides</td>
    </tr>
    <tr>
    <td>speed</td>
    <td>Number</td>
    <td>This denotes the speed of the animation in seconds while switching sldies. If you a animation duration of 500 mili seconds, simply pass '0.5' as value.</td>
    </tr>
    <tr>
    <td>draggable</td>
    <td>Boolean</td>
    <td>Turning this on will let you drag and switch between slides.</td>
    </tr>
    <tr>
    <td>direction</td>
    <td>String</td>
    <td>This refers to the direction of the Slider. It supports two values <'horizontal || 'vertical'></td>
    </tr>
    </tbody>
  </table>
  </li>
 </ul>
## License

MIT © [Srijan1878](https://github.com/Srijan1878)
