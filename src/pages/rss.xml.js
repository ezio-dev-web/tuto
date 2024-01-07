import res, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET(context) {
  return res({
    title: 'Aprendiendo Astro | Blog',
    description: 'Mi camino de aprendizaje Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-es</language>`,
  })
}