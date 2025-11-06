import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch YouTube RSS feed for the channel
    const response = await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UCIleQTFVbILIFzolZh1ktlw', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Node.js)',
      },
    });

    if (!response.ok) {
      // If direct channel feed fails, try alternative approach
      return NextResponse.json([], { status: 200 });
    }

    const text = await response.text();

    // Parse RSS feed
    const videos = parseYouTubeRSSFeed(text);

    return NextResponse.json(videos.slice(0, 6)); // Return latest 5 videos
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return NextResponse.json([], { status: 200 }); // Return empty array on error
  }
}

function parseYouTubeRSSFeed(xml: string) {
  const videos = [];

  // Extract entries from Atom feed
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  let match;

  while ((match = entryRegex.exec(xml)) !== null) {
    const entry = match[1];

    // Extract title
    const titleMatch = /<title>([\s\S]*?)<\/title>/.exec(entry);
    const title = titleMatch ? titleMatch[1].trim() : 'Untitled';

    // Extract video ID and construct link
    const videoIdMatch = /<yt:videoId>([\s\S]*?)<\/yt:videoId>/.exec(entry);
    const videoId = videoIdMatch ? videoIdMatch[1].trim() : '';
    const link = videoId ? `https://www.youtube.com/watch?v=${videoId}` : '';

    // Extract publication date
    const publishedMatch = /<published>([\s\S]*?)<\/published>/.exec(entry);
    const pubDate = publishedMatch ? publishedMatch[1].trim() : new Date().toISOString();

    // Extract description/summary
    const summaryMatch = /<summary>([\s\S]*?)<\/summary>/.exec(entry);
    let description = summaryMatch ? summaryMatch[1].trim() : '';

    // Remove HTML tags from description
    description = description.replace(/<[^>]*>/g, '').substring(0, 200);

    // Extract thumbnail image
    const thumbnailMatch = /<media:thumbnail[^>]+url="([^">]+)"/.exec(entry);
    const image = thumbnailMatch ? thumbnailMatch[1] : '';

    if (link) {
      videos.push({
        title,
        link,
        pubDate,
        description,
        image,
      });
    }
  }

  return videos;
}
