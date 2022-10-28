import animationConfig from '../config/animationConfig'

const { animationStyles } = animationConfig

const getStyles = ({ index, active, animationType }) => {
  const direction = index - active
  return animationStyles[animationType](direction)
}

export default getStyles
