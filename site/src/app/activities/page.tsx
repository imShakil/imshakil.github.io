import Footer from '@/components/Footer';
import ActivitiesTabs from '@/components/ActivitiesTabs';
import { fetchAndParseRSS, parseYouTubeRSS, RSSItem } from '@/lib/rss-parser';

async function getMediumPosts(): Promise<RSSItem[]> {
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent('https://medium.com/feed/@imshakil')}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.items.slice(0, 6).map((item: { title: string; link: string; pubDate: string; description: string; content?: string; thumbnail?: string }) => {
      // Extract image from content or use thumbnail
      let image = item.thumbnail || '';
      if (!image && item.content) {
        const imgMatch = item.content.match(/<img[^>]+src="([^"]+)"/i);
        if (imgMatch) {
          image = imgMatch[1];
        }
      }
      if (!image && item.description) {
        const imgMatch = item.description.match(/<img[^>]+src="([^"]+)"/i);
        if (imgMatch) {
          image = imgMatch[1];
        }
      }
      
      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
        image
      };
    });
  } catch (error) {
    console.error('Failed to fetch Medium posts:', error);
    return [];
  }
}

async function getYouTubeVideos(): Promise<RSSItem[]> {
  try {
    const videos = await fetchAndParseRSS(
      'https://www.youtube.com/feeds/videos.xml?channel_id=UCIleQTFVbILIFzolZh1ktlw',
      parseYouTubeRSS
    );
    return videos.slice(0, 6);
  } catch (error) {
    console.error('Failed to fetch YouTube videos:', error);
    return [];
  }
}

export default async function ActivitiesPage() {
  const [mediumPosts, youtubeVideos] = await Promise.all([
    getMediumPosts(),
    getYouTubeVideos(),
  ]);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      {/* Header */}
      <section className="py-20 px-6 md:px-20 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto space-y-4 slide-in-up">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">Activities</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Latest content from my blog, YouTube channel, GitHub, and professional profiles
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <ActivitiesTabs mediumPosts={mediumPosts} youtubeVideos={youtubeVideos} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
