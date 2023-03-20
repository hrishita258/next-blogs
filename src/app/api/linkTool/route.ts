import cheerio from 'cheerio'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url') || ''
  console.log(url)
  try {
    const response = await fetch(url)
    const text = await response.text()
    const $ = cheerio.load(text)
    const meta = {
      title:
        $('meta[property="og:title"]').attr('content') || $('title').text(),
      description:
        $('meta[property="og:description"]').attr('content') ||
        $('meta[name="description"]').attr('content'),
      image: { url: $('meta[property="og:image"]').attr('content') }
    }
    const responseData = {
      success: 1,
      meta: meta
    }
    return new Response(JSON.stringify(responseData))
  } catch (error) {
    console.log(error)
  }
}
