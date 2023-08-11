import { Image } from "sanity"


export interface playlist{
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
    about: string;
    edu: string;
    com: string;
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