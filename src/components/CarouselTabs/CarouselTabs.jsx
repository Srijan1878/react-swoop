import React from 'react'
import { CarouselTab, StyledCarouselTabs } from '../../styles/Carousel.styles'
import getIndex from '../../utils/getIndex'

const CarouselTabs = ({ activeIndex, tabs, setActiveIndex }) => {
  return (
    <StyledCarouselTabs>
      {tabs.map((_, index) => {
        return (
          <CarouselTab
            isActive={index === getIndex(activeIndex, tabs.length)}
            key={index}
            onClick={() => setActiveIndex(index)}
          />
        )
      })}
    </StyledCarouselTabs>
  )
}

export default CarouselTabs
