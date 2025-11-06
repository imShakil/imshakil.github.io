export interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image?: string;
}

export async function fetchAndParseRSS(
  feedUrl: string,
  parser: (xml: string) => RSSItem[]
): Promise<RSSItem[]> {
  try {
    const response = await fetch(feedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Node.js)',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch RSS feed from ${feedUrl}: ${response.status}`);
      return [];
    }

    const text = await response.text();
    return parser(text);
  } catch (error) {
    console.error(`Error fetching RSS feed from ${feedUrl}:`, error);
    return [];
  }
}

export function parseMediumRSS(xml: string): RSSItem[] {
  const posts: RSSItem[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];

    const titleMatch = /<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/.exec(item);
    const title = titleMatch ? titleMatch[1].trim() : 'Untitled';

    const linkMatch = /<link>([\s\S]*?)<\/link>/.exec(item);
    const link = linkMatch ? linkMatch[1].trim() : '';

    const pubDateMatch = /<pubDate>([\s\S]*?)<\/pubDate>/.exec(item);
    const pubDate = pubDateMatch ? pubDateMatch[1].trim() : new Date().toISOString();

    const descriptionMatch = /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/.exec(item);
    let description = descriptionMatch ? descriptionMatch[1].trim() : '';

    let image = '';
    const imgMatch = /<img[^>]+src="([^">]+)"/.exec(description);
    if (imgMatch) {
      image = imgMatch[1];
    }

    description = description.replace(/<[^>]*>/g, '').substring(0, 200);

    posts.push({ title, link, pubDate, description, image });
  }

  return posts;
}

export function parseYouTubeRSS(xml: string): RSSItem[] {
  const videos: RSSItem[] = [];
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  let match;

  while ((match = entryRegex.exec(xml)) !== null) {
    const entry = match[1];

    const titleMatch = /<title>([\s\S]*?)<\/title>/.exec(entry);
    const title = titleMatch ? titleMatch[1].trim() : 'Untitled';

    const videoIdMatch = /<yt:videoId>([\s\S]*?)<\/yt:videoId>/.exec(entry);
    const videoId = videoIdMatch ? videoIdMatch[1].trim() : '';
    const link = videoId ? `https://www.youtube.com/watch?v=${videoId}` : '';

    const publishedMatch = /<published>([\s\S]*?)<\/published>/.exec(entry);
    const pubDate = publishedMatch ? publishedMatch[1].trim() : new Date().toISOString();

    const summaryMatch = /<summary>([\s\S]*?)<\/summary>/.exec(entry);
    let description = summaryMatch ? summaryMatch[1].trim() : '';

    description = description.replace(/<[^>]*>/g, '').substring(0, 200);

    const thumbnailMatch = /<media:thumbnail[^>]+url="([^">]+)"/.exec(entry);
    const image = thumbnailMatch ? thumbnailMatch[1] : '';

    if (link) {
      videos.push({ title, link, pubDate, description, image });
    }
  }

  return videos;
}