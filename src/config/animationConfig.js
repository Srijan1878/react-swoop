const animationTypes = ['fade', 'slide']

const animationStyles = {
  fade: (direction) => ({
    opacity: !direction ? 1 : 0
  }),
  slide: (direction) => ({
    transform: `translateX(${direction * 100}%)`
  })
}

export default { animationTypes, animationStyles }
