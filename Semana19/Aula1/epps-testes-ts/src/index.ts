import knex from 'knex'
import { config } from 'dotenv'
import { User } from './model/types';

config()

export const isEven = (integer: number): any => integer % 2 === 0

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
   },
});

//Exercicio 1
//b)

export function performPurchase(user: User, value: number): User | undefined {
   if(user.saldo >= value){
      const saldo = user.saldo - value
      const result: User = {name: user.name, saldo: saldo}
      return(result)
   }   
   else undefined
}

// connection.raw(`
//    SHOW TABLES;

//    SHOW DATABASES;
// `).then(console.log)