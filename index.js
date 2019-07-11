if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/cnfapi-miniprogram.js')
} else {
  module.exports = require('./dist/cnfapi-miniprogram.common.js')
}
