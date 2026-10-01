import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context){
 const notes = (await getCollection('notes', ({data}) => !data.draft)).sort((a,b) => b.data.published.valueOf()-a.data.published.valueOf());
 return rss({
  title:'LookTwice Notes',
  description:'Dated observations, unfinished thoughts, and ideas being worked through.',
  site:context.site,
  items:notes.map((note) => ({ title:note.data.title, description:note.data.summary, pubDate:note.data.published, link:`/notes/${note.id}/` })),
  customData:'<language>en-us</language>'
 });
}
