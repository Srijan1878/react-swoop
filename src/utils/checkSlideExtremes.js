export const checkIfLastSlide = ({ loop, active, slidesLength }) => {
  if (loop) return false
  return active === slidesLength - 1
}

export const checkIfFirstSlide = ({ loop, active }) => {
  if (loop) return false
  return !active
}
