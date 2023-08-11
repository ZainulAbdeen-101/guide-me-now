import { createClient, groq} from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

import { Docs, languages, Playlist } from '@/types';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})




export async function fetchData(categories:string):Promise<languages[]> {
 

  return  await client.fetch(groq`*[_type== 'frontend_basic' && categories=='${categories}']{
    heading,
      description,
      logo,
      categories,
      video,
      documentation
   }`);
}

export async function fetchplaylist(play:string):Promise<Playlist[]> {
 

  return  await client.fetch(groq`*[_type=='playlist' && heading=='${play}']{
   heading,
   url,
   title,
   id
   }`)
  }

  export async function fetchDocs():Promise<Docs[]>{
    return  await client.fetch(groq`*[_type=='frontend_basic']{
      documentation,
      heading,
      logo
      }`)
     }
  