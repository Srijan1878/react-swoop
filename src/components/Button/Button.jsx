import React from 'react'
import { CarouselButton } from '../../styles/Carousel.styles'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <CarouselButton {...props}>
      {props.content || (props.next ? 'Next' : 'Prev')}
    </CarouselButton>
  )
}

Button.propTypes = {
  next: PropTypes.bool
}

export default Button
