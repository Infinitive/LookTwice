import { getCollection, type CollectionEntry } from 'astro:content';
export type CollectionName='story'|'notes'|'things';
export const isPublic=(entry:{data:{status:string}})=>entry.data.status==='published';
export async function publicCollection<T extends CollectionName>(name:T){
  return (await getCollection(name,(entry)=>isPublic(entry))).sort((a,b)=>a.data.sortOrder-b.data.sortOrder);
}
export async function homepageEntry<T extends CollectionName>(name:T){
  const entries=await publicCollection(name); return entries.find((entry)=>entry.data.homepage) ?? entries[0];
}
export async function relatedEntries(refs:string[]){
  const all=[...(await publicCollection('story')),...(await publicCollection('notes')),...(await publicCollection('things'))];
  return refs.map((ref)=>{const [collection,id]=ref.split('/');return all.find((entry)=>entry.collection===collection&&entry.id===id)}).filter(Boolean) as CollectionEntry<CollectionName>[];
}
export const entryUrl=(entry:CollectionEntry<CollectionName>)=>`/${entry.collection}/${entry.id}/`;
