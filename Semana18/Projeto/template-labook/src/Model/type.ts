

export enum ENUM_TYPE {
    Normal = "normal",
    Evento = "evento"
}

export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type userToBusinessBTO = {
    name: string,
    email: string,
    password: string
}

export type businessToUserBTO = {
    id: string,
    name: string,
    email: string,
    password: string
    
}

export type Comments = {
    fk_user: string,
    fk_post: string,
    comment: string
}

export type Post = {
    id: string,
    photo: string,
    description: string,
    creation_date: Date,
    type: ENUM_TYPE,
    fk_user: string
}

export type authenticationData = {
    id: string,
    email: string
 }

