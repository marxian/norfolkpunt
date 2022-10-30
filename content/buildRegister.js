const glob = require('glob')
const fs = require('fs').promises
const matter = require('gray-matter')
const papa = require('papaparse')

async function buildRegister() {
  const puntDocs = glob.sync('./content/boats/*.md')
  const punts = await Promise.all(
    puntDocs.map(async (path) => {
      const file = await fs.readFile(path, 'utf8')
      const { data } = matter(file)
      return data
    })
  )
  const register = Object.values(punts)
    .sort((a, b) => b.sailNumber - a.sailNumber)
    .filter((p) => !p.lost)
    .map((p) => ({
      'Sail Number': p.sailNumber,
      Name: p.name,
      Owner: p.owners[0].owner,
      Handicap: p.handicap,
      'Provisional Handicap': p.provisionalHandicap ? 'yes' : 'no',
      Length: p.loa + 'ft',
    }))
  await fs.writeFile(
    './public/norfolk-punt-register.csv',
    papa.unparse(register)
  )
}

buildRegister()
