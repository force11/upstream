import nodePandoc from 'node-pandoc-promise'

// const fs = require('filesync')

export async function generateHtml(input: string) {
  const args = [
    '-f',
    'html',
    '-t',
    'html'
    // '--filter',
    // 'pandoc-url2cite',
    // '--citeproc',
    // '--csl',
    // './american-medical-association.csl',
    // '--metadata',
    // 'url2cite=all-links'
  ]

  return await nodePandoc(input, args)
}

// export async function generateEpub() {
//   const posts = await getPosts()
//   let src, date, epubArgs

//   await posts.forEach((post) => {
//     src = post.html

//     date = new Date(post.published_at).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     })

//     // generate ePub
//     epubArgs = [
//       '-f',
//       'html',
//       '-t',
//       'epub',
//       '-o',
//       './public/epub/' + post.slug + '.epub',
//       '--standalone',
//       '--data-dir',
//       './'
//     ]
//     nodePandoc(src, epubArgs)
//   })
// }

// export async function generatePdf() {
//   const posts = await getPosts()
//   let src, date, pdfArgs

//   await posts.forEach((post) => {
//     src = post.html

//     date = new Date(post.published_at).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     })

//     // generate pdf
//     pdfArgs = [
//       '-f',
//       'html',
//       '-t',
//       'pdf',
//       '-o',
//       './public/pdf/' + post.slug + '.pdf',
//       '--standalone',
//       '--data-dir',
//       './',
//       '--metadata',
//       'title=' + post.title,
//       '--metadata',
//       'author=' + post.primary_author.name + ', Gobbledygook',
//       '--metadata',
//       'date=' + date
//     ]
//     nodePandoc(src, pdfArgs)
//   })
// }

// export async function generateJats() {
//   const posts = await getPosts()
//   let src, date, jatsArgs

//   await posts.forEach((post) => {
//     src = post.html

//     date = new Date(post.published_at).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     })

//     // generate jats
//     jatsArgs = [
//       '-f',
//       'html',
//       '-t',
//       'jats',
//       '-o',
//       './public/jats/' + post.slug + '.xml',
//       '--standalone',
//       '--data-dir',
//       './',
//       '--metadata',
//       'title=' + post.title,
//       '--metadata',
//       'author=' + post.primary_author.name,
//       '--metadata',
//       'author.orcid=' + post.primary_author.website,
//       '--metadata',
//       'date=' + date,
//       '--metadata',
//       'journal.publisher-id=Gobbledygook',
//       '--metadata',
//       'journal.title=Gobbledygook',
//       '--metadata',
//       'license.type=Open Access',
//       '--metadata',
//       'license.link=https://creativecommons.org/licenses/by/4.0/legalcode',
//       '--metadata',
//       'license.text=Distributed under the terms of the Creative Commons Attribution 4.0 License.'
//     ]
//     nodePandoc(src, jatsArgs)
//   })
// }
