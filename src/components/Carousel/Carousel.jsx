import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import {
  CarouselWrapper,
  CarouselContentWrapper,
  CarouselContentTracker
} from '../../styles/Carousel.styles'
import Button from '../Button/Button'
import CarouselTabs from '../CarouselTabs/CarouselTabs'
import getIndex from '../../utils/getIndex'
import { getContentTrackerStyles, getSlideStyles } from '../../utils/getStyles'
import animationConfig from '../../config/animationConfig'
import generateConfig from '../../utils/generateConfig'
import SLIDE_SNAP_RANGE from '../../constants/SlideSnapRange'
import {
  checkIfFirstSlide,
  checkIfLastSlide
} from '../../utils/checkSlideExtremes'
import directions, { HORIZONTAL, VERTICAL } from '../../constants/directions'
import { ReactComponent as Next } from '../../assets/Next.svg'

const { animationTypes } = animationConfig
/**
 * Component for Creating the Carousel.
 * @component
 * @example
 *  return (
 *   <Carousel config={{
 *      showTabs: false,
 *      loop: true,
 *      auto: true,
 *      interval: 3000
 *    }}>
 *      <Carousel.Content src={"http://placekitten.com/200/300"} />
        <Carousel.Content src={"http://placekitten.com/200/301"} />
        <Carousel.Content src={"http://placekitten.com/200/302"} />
 *   </Carousel>
 * )
 */

export const Carousel = ({ children = [], config = {}, ...props }) => {
  // genertating config
  const configOptions = generateConfig(config)

  // config options
  const {
    loop,
    showTabs,
    auto,
    interval,
    animationType,
    speed,
    draggable,
    direction
  } = configOptions

  // states
  const [active, setActive] = useState(props.active || 0)
  const [dragOffset, setDragOffset] = useState(0)

  const slidesLength = children.length

  const changeImage = (direction = 1) => {
    return () => {
      setActive((prev) => getIndex(prev + direction, slidesLength))
    }
  }

  useEffect(() => {
    let intervalId

    const intevalValue = interval

    if (auto) {
      setInterval(changeImage(1), intevalValue)
    }

    return () => clearInterval(intervalId)
  }, [])

  const populateDragOffset = (value) => setDragOffset(value)

  const snapSlide = () => {
    if (dragOffset > SLIDE_SNAP_RANGE.MAX) {
      changeImage(1)()
    } else if (dragOffset < SLIDE_SNAP_RANGE.MIN) {
      changeImage(-1)()
    }
    setDragOffset(0)
  }

  const childrenWithProps = React.Children.map(children, (child, index) => {
    const isContentComponent = child.type === Carousel.Content
    const props = {
      index,
      animationType,
      speed,
      active,
      populateDragOffset,
      setActive,
      snapSlide,
      draggable,
      direction
    }
    switch (isContentComponent) {
      case true:
        return React.cloneElement(child, props)
      case false:
        return <Carousel.Content {...props}>{child}</Carousel.Content>
    }
  })

  return (
    <CarouselWrapper {...props}>
      <CarouselContentTracker
        showAnimation={dragOffset === 0}
        speed={speed}
        style={getContentTrackerStyles({
          dragOffset,
          animationType,
          direction
        })}
      >
        {childrenWithProps}
      </CarouselContentTracker>
      <Button
        content={<Next />}
        next
        onClick={changeImage(1)}
        disabled={checkIfLastSlide({ loop, active, slidesLength })}
      />
      <Button
        content={<Next />}
        onClick={changeImage(-1)}
        disabled={checkIfFirstSlide({ loop, active })}
      />
      {showTabs && (
        <CarouselTabs
          tabs={childrenWithProps}
          activeIndex={active}
          setActiveIndex={setActive}
        />
      )}
    </CarouselWrapper>
  )
}

Carousel.Content = ({
  index,
  children,
  active,
  animationType,
  speed,
  populateDragOffset,
  snapSlide,
  draggable,
  direction,
  ...props
}) => {
  // states
  const [isSlideSelected, setIsSlideSelected] = useState(false)

  // refs
  const slideDetailsRef = useRef({})

  const attachEventListener = (cb) => {
    if (draggable) return cb
  }

  const startMovingSlide = (e) => {
    if (!draggable) return false
    const rect = e.target.getBoundingClientRect()

    if (direction === HORIZONTAL)
      slideDetailsRef.current.start = e.clientX - rect.left
    else slideDetailsRef.current.start = e.clientY - rect.top

    setIsSlideSelected(true)
  }

  const deselectSlide = () => {
    if (!isSlideSelected) return
    setIsSlideSelected(false)
    snapSlide()
  }

  const moveSlide = (e) => {
    if (!isSlideSelected) return
    const rect = e.target.getBoundingClientRect()
    switch (direction) {
      case HORIZONTAL: {
        const x = e.clientX - rect.left

        const targetWidth = rect.width
        populateDragOffset(
          ((slideDetailsRef.current.start - x) / targetWidth) * 100
        )
        break
      }
      case VERTICAL: {
        const y = e.clientY - rect.top

        const targetHeight = rect.height
        populateDragOffset(
          ((slideDetailsRef.current.start - y) / targetHeight) * 100
        )
        break
      }
      default:
    }
  }

  return (
    <CarouselContentWrapper
      {...props}
      speed={speed}
      style={getSlideStyles({ index, active, animationType, direction })}
      onMouseDown={attachEventListener(startMovingSlide)}
      onMouseMove={attachEventListener(moveSlide)}
      onMouseUp={attachEventListener(deselectSlide)}
      onMouseLeave={attachEventListener(deselectSlide)}
    >
      {children}
    </CarouselContentWrapper>
  )
}
Carousel.propTypes = {
  config: PropTypes.shape({
    showTabs: PropTypes.bool,
    loop: PropTypes.bool,
    auto: PropTypes.bool,
    interval: PropTypes.number,
    speed: PropTypes.number,
    draggable: PropTypes.bool,
    direction: PropTypes.oneOf([...Object.values(directions)]),
    animationType: PropTypes.oneOf([...animationTypes])
  })
}
