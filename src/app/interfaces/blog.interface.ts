export interface IBlog {
    id: string;
    title: string;
    body: string;
    image: string;
    alt?: string;
    created_at?: string;
    additionalResources?: AdditionalResources[];
  }
  
  export interface AdditionalResources {
    id: string;
    title: string;
    link: string;
    created_at?: string;
    blogId: string;
  }