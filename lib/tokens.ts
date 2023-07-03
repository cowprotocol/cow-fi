import fs from 'fs'
import path from 'path'

const tokensPath = path.join(process.cwd(), 'data', 'tokens.json')
const descriptionPath = path.join(process.cwd(), 'data', 'descriptions')

export function getAllTokensData() {
  const tokenJson = fs.readFileSync(tokensPath, 'utf-8')
  const tokenData = JSON.parse(tokenJson)

  const descriptionFiles = fs.readdirSync(descriptionPath).map((f) => f.replace('.md', ''))

  const output = tokenData.filter((token) => descriptionFiles.includes(token.id))

  return output
}

export function getAllTokensIds() {
  const tokensData = getAllTokensData()

  return tokensData.map(({ id }) => ({ params: { id } }))
}

export async function getTokenData(_id) {
  const id = _id.toLowerCase()

  const tokensData = getAllTokensData()

  const token = tokensData.find(({ id: _id }) => _id === id)

  const filePath = path.join(descriptionPath, `${id}.md`)
  const description = fs.readFileSync(filePath, 'utf-8')

  token.description.en = description

  return token
}
