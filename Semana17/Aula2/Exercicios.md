# Douglas Florido
## Exercicios Semana 17 Aula 2

### Exercicio 1

~~~Javascript
import * as bcrypt from "bcryptjs";

const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);
~~~


> a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?

Round e Salt são parcelas do código criptografado, o Round é basicamente o custo para se criptografar o código, assim como seu nível de dificuldade para ser criptografado, vai de 1 a 12, o salt a string totalmente criptografada.

O Valor padrão para o round é 12, utilizei o valor 12, por ser mais seguro.

> b) Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs.   
~~~Typescript
import * as bcrypt from "bcryptjs";


//Exercicio 1, a)

export const generateHash = async(s: string): Promise<string> => {

const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);

return result

}
~~~

### Exercicio 2

> a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.

Teremos que modificar ambos, já que o cadastro será feito com a senha encriptografada e o login, para ter a comparação precisamos da função de comparação "compare", criada para verificar se a senha inserida é igual ao hash

> b) Faça a alteração do primeiro endpoint

> c) Faça a alteração do segundo endpoint

> d) No exercício de ontem, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.

Nao, já que aquele endpoint nao utiliza a senha para nenhum tipo de verificação e foi a criptografia da senha q alteramos hoje

### Exercicio 3

> a) Altere a sua tabela de usuários para ela possuir uma coluna role. Considere que pode assumir os valores normal  e admin. Coloque normal como valor padrão.

~~~SQL
ALTER TABLE User 
ADD role VARCHAR(6) NOT NULL DEFAULT 'NORMAL';
~~~

> b) Altere o type AuthenticationData e a função getData() para representarem esse novo tipo no token.

> c) Altere o cadastro para receber o tipo do usuário e criar o token com essa informação

> d) Altere o login para criar o token com o role do usuário














