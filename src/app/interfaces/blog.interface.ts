interface Blog {
    title: string,
    id: string,
    body: string,
    image: string,
    alt?: string
    date?: string
    additionalResources?: AdditionalResources[];
}

interface AdditionalResources {
    title: string,
    id: string,
    link: string
}