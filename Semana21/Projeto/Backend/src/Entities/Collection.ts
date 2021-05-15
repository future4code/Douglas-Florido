export type CollectionInput = {    
    title: string,
    subtitle: string,    
    token: string
}

export type CollectionInputComplete = {
    id: string,
    title: string,
    subtitle: string,
    author: string,
}

export type CollectionRelationInput = {
    id_collection: string,
    id_image: string
}