export type ImageInput = {
    subtitle: string,
    URL: string
}

export type ImageToBusiness = {
    token: string,
    subtitle:string,
    URL: string

}

export type ImageComplete = {
    id: string,
    subtitle:string,
    URL: string,
    fk_user: string
}

export type ImageTokenId = {
    token: string,
    id: string
}

export type basicToken = {
    token: string
}