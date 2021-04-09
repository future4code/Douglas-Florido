# Douglas Florido
## Exercicios Semana 15 Aula 3

### Exercicio 1

~~~SQL
import { v4 } from "uuid"

const id = v4();

console.log("Generated Id: ", id);
~~~~

> a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

sim, já que Strings vc consegue inserir tanto números, quanto caracteres, dando mais de 10 números e mais de 26 letras de possibilidade , para um item apenas do id, fazendo com que seja muito mais seguro  doq apenas números.

> b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id. 



### Exercicio 2
~~~SQL
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
~~~

> a) Explique o código acima com as suas palavras.

O Código ele adiciona na tabela "User", que possui as seguintes colunas: "id: string, email: string, password: string" 
os valores id, email, password, ou seja, as colunas possuem o mesmo nome das variáveis que ele insere

> b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

~~~SQL
CREATE TABLE User(
id VARCHAR(255) PRIMARY KEY,
email TEXT NOT NULL,
password TEXT NOT NULL
);
~~~

> c) Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.


### Exercicio 3

~~~SQL
import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
~~~

> a) O que a linha as string faz? Por que precisamos usar ela ali?

A Linha "as string" le a variável como String, logo se passar um number ou float, ele vem em formato de string, precisa-se passar desta forma pois todos os numeros e floats serão gravados e utilizados em forma de string, garantindo entao o formato da variavel

> b) Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.

### Exercicio 4

> a) Crie o endpoint que realize isso, com as funções que você implementou anteriormente

> b) Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um "@"

> c) Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais


















