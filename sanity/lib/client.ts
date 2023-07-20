import { createClient, groq} from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { Image } from 'sanity';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})


interface c {
  heading:string,
  description:string,
  logo:Image,
  catogories:string,
  vtitle:string
  video:string,
  documentation:string
}


export async function fetchData(categories:string):Promise<c[]> {
 

  return  await client.fetch(groq`*[_type== 'frontend_basic' && catogories=='${categories}']{
    heading,
      description,
      logo,
      catogories,
      video,
      documentation
   }`);
}