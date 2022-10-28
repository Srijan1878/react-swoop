const getIndex = (index, imagesLength) => {
  let modIndex = index % imagesLength
  if (modIndex < 0) modIndex = imagesLength + modIndex
  return modIndex
}

export default getIndex
