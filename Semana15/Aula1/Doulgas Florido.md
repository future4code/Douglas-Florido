# Doulgas Florido
## Exercicios Semana 15 Aula 1

### Exercicio 1
~~~SQL
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);
~~~
> a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar
> um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

Create Table : serve para criar uma nova tabela, no caso demos o nome de "actor", ou seja, atores
em seguida segue as colunas dessa tabela, com seus respectivos tipos.

Primeiro o id, com o tipo varchar, ou seja uma quantidade variavel de character, ou caracteres, em seguida é a chave
primaria das colunas.

A Coluna seguinte tem tipo varchar também, porém nao pode ser vazio, já que colocamos "not null"
Salary possui o tipo "Float", na qual possui uma quantidade pré definida de casas depois da virgula, também possui "not null"

birth_date é do tipo Date, ou seja é um conjunto de "String" com ano, mes e dia, também nao pode ser null.
Por fim o genero, varchar, semelhante ao name, porém com uma quantidade de 6 caracteres, não podendo ser nulo.

> b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais.
> Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.
~~~SQL
SHOW DATABASES
~~~

O comando deu como resultados todos os bancos de dados existentes, no caso apenas dois, 
- epps-douglas-florido
- information_schema

Já o comando:
~~~SQL
SHOW TABLES
~~~

Mostra todas as tabelas já criadas, no caso apenas a tabela "actor", unica tabela criada
- actor

> c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela.
> Utilize o comando  DESCRIBE Actor e explique os resultados.

Mostra todas as variaveis criadas, seus tipos e atributos

### Exercicio 2
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
~~~
> a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000
> e data de nascimento 23 de Agosto de 1963

~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000 ,
  "1963-09-23", 
  "female"
);
~~~

> b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002.
> Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique
> porque esse erro aconteceu

~~~ SQL
Error Code: 1062.
Duplicate Entry '002' for key 'PRIMARY'
~~~

Significa q a entrada é duplicada, ou seja, ja existe uma entrada 002 para a chave primária

> ente usar as queries abaixo. Você vai reparar que elas vão gerar um erro.
> Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique
> porque esses erros aconteceram. Por fim, corrija individualmente cada

> c)
~~~SQL
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
~~~

~~~SQL
Error Code: 1136. Column count doesn't match value count at row 1
~~~~
o Erro diz que a quantidade de colunas não condiz com a quantidade de valores passados, ou seja, precisa-se passar
a quantidade de valores igual a de colunas

~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
~~~

> d)
~~~SQL
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
~~~

~~~SQL
Error Code: 1364. Field 'name' doesn't have a default value
~~~
O erro fala que o Campo "name" nao possui um valor padrão
para solucionar:
~~~SQL
INSERT INTO Actor (id, name,salary, birth_date, gender)
VALUES(
  "004",
  "José Lindo",
  400000,
  "1949-04-18", 
  "male"
);
~~~

> e)

~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
~~~
~~~SQL
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
~~~
O Erro diz que o valor da coluna 'birth_date' está errado, para solucionar só colocar o que está na coluna entre aspas

~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
~~~

> f)
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
~~~

### Exercicio 3
> a) Escreva uma query que retorne todas as informações das atrizes
~~~SQL
SELECT * from Actor WHERE gender = "female"
~~~

> b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
~~~SQL
SELECT salary from Actor WHERE name = "Tony Ramos"
~~~

> c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
~~~SQL
SELECT * from Actor WHERE gender = "invalid"
~~~
Retornou um Array vazio, já que em uma tabela o ultimo valor sempre é um com todas as colunas vazias

> d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
~~~SQL
SELECT id, name, salary from Actor WHERE salary > 500
~~~

> e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza
> (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente
> a query para que funcione, teste o comando e anote-o também como resposta

~~~SQL
SELECT id, nome from Actor WHERE id = "002"
~~~
Segue o erro:
~~~SQL
Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'SELECT id, nome from Actor WHERE id = "002"' at line 2
~~~
ou seja a linha usada possui um erro de Syntax, no caso é uma coluna q não existe "nome", existe uma com o nome "name", como ele não encontra a coluna procurada ele devolve um erro


### Exercicio 4

~~~SQL
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
~~~

> a) Explique com as suas palavras a query acima*
Selecione todas as informações da tabela Ator que possuam: nome que comece Com "A" e tenha qualquer coisa em seguida
ou Nome que comece com "J" e tenha qualquer coisa em seguida E o salary seja maior do que 300000

> b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*

~~~SQL
SELECT * FROM Actor
WHERE !(name LIKE "A%") AND salary > 350000
~~~

> c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 
~~~SQL
SELECT * FROM Actor
WHERE (name LIKE "G%" || name LIKE "g%" || name LIKE "%g" || name LIKE "%G" || name LIKE "%G%" || name LIKE "%g%")
~~~
> d) Escreva uma query com os atores que tenham a lerta "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*

~~~SQL
SELECT * FROM Actor WHERE (name LIKE "G%" || name LIKE "g%" || name LIKE "%g" || name LIKE "%G" || name LIKE "%G%" || name LIKE "%g%" || name LIKE "A%" || name LIKE "a%" || name LIKE "%a" || name LIKE "%A" || name LIKE "%A%" || name LIKE "%a%") AND (salary  > 350000 AND salary  < 900000)
~~~