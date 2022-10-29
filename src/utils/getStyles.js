import animationConfig from '../config/animationConfig'

const { animationStyles } = animationConfig

export const getSlideStyles = ({ index, active, animationType }) => {
  const direction = index - active
  return animationStyles[animationType](direction)
}

export const getContentTrackerStyles = ({ dragOffset, animationType }) => {
  if (animationType !== 'slide') return {}
  return { transform: `translateX(${dragOffset * -1}%)` }
}
