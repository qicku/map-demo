const fs = require('fs-extra')

const { R, dist, docs } = require('./paths')

main()

function main() {
  fs.copySync(dist, docs)
}
