import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch Medium RSS feed
    const response = await fetch('https://medium.com/feed/@imshakil', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Node.js)',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Medium feed');
    }

    const text = await response.text();

    // Parse RSS feed
    const posts = parseRSSFeed(text);

    return NextResponse.json(posts.slice(0, 6)); // Return latest 5 posts
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return NextResponse.json([], { status: 200 }); // Return empty array on error
  }
}

function parseRSSFeed(xml: string) {
  const posts = [];

  // Extract items from RSS feed
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];

    // Extract title
    const titleMatch = /<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/.exec(item);
    const title = titleMatch ? titleMatch[1].trim() : 'Untitled';

    // Extract link
    const linkMatch = /<link>([\s\S]*?)<\/link>/.exec(item);
    const link = linkMatch ? linkMatch[1].trim() : '';

    // Extract publication date
    const pubDateMatch = /<pubDate>([\s\S]*?)<\/pubDate>/.exec(item);
    const pubDate = pubDateMatch ? pubDateMatch[1].trim() : new Date().toISOString();

    // Extract description
    const descriptionMatch = /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/.exec(item);
    let description = descriptionMatch ? descriptionMatch[1].trim() : '';

    // Extract image from description (Medium includes img tags in description)
    let image = '';
    const imgMatch = /<img[^>]+src="([^">]+)"/.exec(description);
    if (imgMatch) {
      image = imgMatch[1];
    }

    // Remove HTML tags from description
    description = description.replace(/<[^>]*>/g, '').substring(0, 200);

    posts.push({
      title,
      link,
      pubDate,
      description,
      image,
    });
  }

  return posts;
}
