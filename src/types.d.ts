import { Image } from "sanity"


export interface Playlist{
    heading:string,
    url:string,
    title:string,
    id:string
    
}
export interface languages{
    heading:string,
    description:string,
    logo:Image,
    categories:string,
    video:string,
    documentation:string
  }

  export interface MyFormValues {
    about: string,
    edu: string,
    com: string,
  }
  

  export  interface Course {
heading:string,
url:string,
cpercent:number
  }

  export interface Quiz{
    heading:string,
    marks:number,
    correct:number
  }

   export interface WatchProps {
    heading: string,
    url: string
  }
  export interface Docs {
    heading: string,
    logo: Image,
    documentation:string
  }

  export interface SearchParams{
    searchParams: { [key: string]: string | string[] | undefined }
  }