const fs = require('fs-extra')

const { R, baseResovle, dist, docs } = require('./paths')

main()

function main() {
  fs.ensureDirSync(docs)
  fs.copySync(dist, baseResovle('../qicku.github.io/docs'))
}
