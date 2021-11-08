import '@formatjs/intl-numberformat/polyfill'
import '@formatjs/intl-numberformat/locale-data/en'
import sanitizeHtml from 'sanitize-html'
import ReactHtmlParser from 'react-html-parser'
import trimText from './trimText'
const { scoreFleschKincaidEase } = require('readability-cyr')

export const compactNumbers = (num: number, compact: boolean = false) => {
  let options = {}
  if (compact && num >= 1e3)
    options = { notation: 'compact', compactDisplay: 'short' }
  return num.toLocaleString('en-US', options)
}

export const pluralize = (
  val: number,
  word: string,
  compact: boolean = false,
  plural: string = word + 's'
) => {
  const uncountable = ['Software']
  const resultNumber =
    typeof val == 'number' ? compactNumbers(val, compact) + ' ' : ''
  const resultString = val === 1 || uncountable.includes(word) ? word : plural
  return resultNumber + resultString
}

// base32 (cockroft) encode uuid
// insert hyphen every 6 characters
export const uuid2base32 = (uuid: string) => {
  const UuidEncoder = require('uuid-encoder')
  const encoder = new UuidEncoder('base32')
  return encoder
    .encode(uuid)
    .match(/.{1,7}/g)
    .join('-')
}

// calculate Flesch Reading Ease score
export const readabilityScore = (content: string) => {
  return scoreFleschKincaidEase(content)
}

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export const initMiddleware = (middleware) => {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}

export const sanitizeDescription = (description: string) => {
  return ReactHtmlParser(
    trimText(
      sanitizeHtml(description, {
        allowedTags: []
      }),
      200,
      250,
      300
    )[0] + ' ...'
  )
}
