import animationConfig from '../config/animationConfig'

const { animationStyles } = animationConfig

const getStyles = ({ index, activeImage, animationType = 'slide', speed }) => {
  const direction = index - activeImage
  return animationStyles[animationType](direction)
}

export default getStyles
