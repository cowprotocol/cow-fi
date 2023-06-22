import fs from 'fs'
import path from 'path'
import { tokenDescriptions } from 'data/description'

// TODO: this could probably be fetched externaly
export function getAllTokensData() {
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

  const token = tokensData.find(({ id: _id }) => _id === id)

  if (id in tokenDescriptions) {
    token.description.en = tokenDescriptions[id]
  } else {
    token.description.en = `<p>${token.description.en}</p>`
  }

  return token
}
