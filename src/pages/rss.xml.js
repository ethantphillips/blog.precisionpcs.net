import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');

  return rss({
    title: 'Precision PCs Blog',
    description: 'News, guides, and updates from Precision PCs.',
    site: 'https://blog.precisionpcs.net',
    items: posts.map((post) => ({
      link: `/blog/${post.slug}/`,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
    })),
    customData: `<language>en-us</language><managingEditor>ethan@precisionpcs.net</managingEditor>`,
  });
}
