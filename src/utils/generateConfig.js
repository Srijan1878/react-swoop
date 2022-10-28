import defaultOptionsConfig from '../config/defaultOptionsConfig'

const generateConfig = (config) => {
  const finalConfig = defaultOptionsConfig
  Object.keys(config).forEach((key) => {
    finalConfig[key] = config[key]
  })
  return finalConfig
}

export default generateConfig
