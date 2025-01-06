import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import { remark } from 'remark'
import html from 'remark-html'

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

const boatsDirectory = join(process.cwd(), 'content', 'boats')

export function getBoatSlugs() {
  const slugs = fs.readdirSync(boatsDirectory)
  return slugs.map((s) => s.replace(/\.md$/, ''))
}

export function getBoatBySlug(slug) {
  const fullPath = join(boatsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const honours = getHonours(slug)
  return {
    data: {
      ...data,
      honours,
    },
    content,
  }
}

function getHonours(slug) {
  const { data, content } = getPage('honours')
  return data.events
    .filter((e) => e.winner === slug)
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
}

export function getBoats() {
  return getBoatSlugs().map((slug) => ({
    slug,
    ...getBoatBySlug(slug),
  }))
}

const pagesDirectory = join(process.cwd(), 'content', 'pages')

export function getPage(name) {
  const fullPath = join(pagesDirectory, `${name}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return {
    data,
    content,
  }
}
