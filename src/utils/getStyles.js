import animationConfig from '../config/animationConfig'
import COORDINATES from '../constants/coordinates'

const { animationStyles } = animationConfig

export const getSlideStyles = ({ index, active, animationType, direction }) => {
  const vector = index - active
  return animationStyles[animationType](direction, vector)
}

export const getContentTrackerStyles = ({
  dragOffset,
  animationType,
  direction
}) => {
  if (animationType !== 'slide') return {}
  return {
    transform: `translate${COORDINATES[direction]}(${dragOffset * -1}%)`
  }
}
