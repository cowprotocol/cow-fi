import fs from 'fs'
import path from 'path'

// TODO: this could probably be fetched externaly
function getAllTokensData() {
  const filePath = path.join(process.cwd(), 'data', 'tokens.json')
  const jsonData = fs.readFileSync(filePath, 'utf-8')

  return JSON.parse(jsonData)
}

export function getAllTokensIds() {
  const tokensData = getAllTokensData()

  return tokensData.map(({ id }) => ({ params: { id } }))
}

export function getTokenData(id) {
  const tokensData = getAllTokensData()

  return tokensData.find(({ id: _id }) => _id === id)
}
