# Douglas Henrique Buzeti Florido   
## Exercicio 4

> a) Precisamos criar outra modelagem aqui?

Não precisamos, já que estamos utilizando o tipo "user", nao há necessidade de alterar para algum tipo dto, já q esse tipo será enviado ao banco de dados, o DTO só é utilizado dentro do ambiente, ou seja, do Controller, pra business e da business para o data, quando for algo imutavel, como nesse caso, que será já enviado ao banco, não há necessidade.

> b) Precisamos gerar alguma outra alteração no nosso código?

Não precisamos