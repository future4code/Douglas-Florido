import app from "./app";
import editUser from './endpoints/editUser';
import createUser from './endpoints/createUser';
import login from './endpoints/login';
import { hash, compare } from "./services/hashManager";
import getAddressInfo from './services/getAddressInfo';

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)

let i = getAddressInfo("82590300", 15, "casa")
console.log(i)