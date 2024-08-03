interface Blog {
    title: string,
    id: number,
    body: string,
    image: string,
    alt?: string
    created_at?: string
    additionalResources?: AdditionalResources[];
}

interface AdditionalResources {
    title: string,
    id: number,
    blogId: number
    link: string,
    created_at?: string
}