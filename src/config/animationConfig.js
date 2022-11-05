import COORDINATES from '../constants/coordinates'

const animationTypes = ['fade', 'slide']

const animationStyles = {
  fade: (direction, vector) => ({
    opacity: !vector ? 1 : 0
  }),
  slide: (direction, vector) => ({
    transform: `translate${COORDINATES[direction]}(${vector * 100}%)`
  })
}

export default { animationTypes, animationStyles }
