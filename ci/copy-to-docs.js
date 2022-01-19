const fs = require('fs-extra')

const { R, dist, docs } = require('./paths')

main()

function main() {
  fs.ensureDirSync(docs)
  fs.copySync(dist, docs)
}
