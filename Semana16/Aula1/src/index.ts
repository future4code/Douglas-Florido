import {server, app} from './Server/server'
import {getCertainUser, getUserByType, orderByNameOrType} from './Functions/Functions'
server

app.get("/users/search", getCertainUser)

app.get("/users/:type", getUserByType)

app.get("/orderByNameOrType",orderByNameOrType )