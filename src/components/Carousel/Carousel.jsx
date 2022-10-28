import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  CarouselWrapper,
  CarouselContentWrapper
} from '../../styles/Carousel.styles'
import Button from '../Button/Button'
import CarouselTabs from '../CarouselTabs/CarouselTabs'
// import getIndex from '../../utils/getIndex'
import getStyles from '../../utils/getStyles'
import animationConfig from '../../config/animationConfig'
import generateConfig from '../../utils/generateConfig'

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

export const Carousel = ({ children, config = {}, ...props }) => {
  const configOptions = generateConfig(config)
  console.log(configOptions)
  const { loop, showTabs, auto, interval, animationType, speed } = configOptions
  const [activeImage, setActiveImage] = useState(props.activeImage || 0)

  const changeImage = (direction = 1) => {
    return () => {
      setActiveImage((prevImage) => prevImage + direction)
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

  const childrenWithProps = React.Children.map(children, (child, index) => {
    const isContentComponent = child.type === Carousel.Content
    switch (isContentComponent) {
      case true:
        return React.cloneElement(child, {
          index,
          animationType,
          speed,
          activeImage,
          setActiveImage
        })
      case false:
        return (
          <Carousel.Content
            index={index}
            animationType={animationType}
            speed={speed}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
          >
            {child}
          </Carousel.Content>
        )
    }
  })

  return (
    <CarouselWrapper>
      {childrenWithProps}
      <Button
        next
        onClick={changeImage(1)}
        disabled={!loop && activeImage === children.length - 1}
      />
      <Button
        onClick={changeImage(-1)}
        disabled={!loop && !activeImage}
        tabs={children}
      />
      {showTabs && (
        <CarouselTabs
          tabs={childrenWithProps}
          activeIndex={activeImage}
          setActiveIndex={setActiveImage}
        />
      )}
    </CarouselWrapper>
  )
}

Carousel.Content = ({ index, children, activeImage, animationType, speed }) => {
  return (
    <CarouselContentWrapper
      speed={speed}
      style={getStyles({ index, activeImage, animationType })}
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
    animationType: PropTypes.oneOf([...animationTypes])
  })
}
