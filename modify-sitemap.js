// modify-sitemap.js
import { promises as fsPromises } from 'fs'
import { resolve } from 'path'

async function modifySitemap() {
  const filePath = resolve(process.cwd(), 'dist', 'sitemap.xml')

  try {
    let xmlContent = await fsPromises.readFile(filePath, 'utf8')

    const baseUrl = 'https://profile.2fishs.com/'
    const regex = /http:\/\/localhost\/(.*)/
    const replacedXmlContent = xmlContent.replace(regex, (match, p1) => `http://${baseUrl}${p1}`)

    await fsPromises.writeFile(filePath, replacedXmlContent, 'utf8')
    console.log('Sitemap modified successfully.')
  } catch (error) {
    console.error('Failed to modify sitemap:', error)
  }
}

modifySitemap()
