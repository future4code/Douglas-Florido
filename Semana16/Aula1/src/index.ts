import {server, app} from './Server/server'
import {getCertainUser} from './Functions/Functions'
server

app.get("/users/search", getCertainUser)

