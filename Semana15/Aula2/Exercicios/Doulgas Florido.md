# Douglas Florido
## Exercicios Semana 15 Aula 2

### Exercicio 1

Explique os seguintes comandos
> a) 
~~~SQL
ALTER TABLE Actor DROP COLUMN salary;
~~~
Altera a tabela "Actor" deletando toda coluna chamada "salary"

> b)
~~~SQL
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
~~~
Altera a Tabela "Actor" mudando a coluna "gender" para o nome "sex"

> c) 
~~~SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
~~~
Altera a Tabela "Actor" mudando a coluna "gender" para uma "gender VARCHAR(255)", ou seja, de 6 caracteres para 255

> d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres

~~~SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~

### Exercicio 2

> a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

~~~SQL
UPDATE Actor
SET birth_date = "1930-04-25"
WHERE id = "003";
~~~

> b )Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PÃES.
Então, escreva outra query para voltar ao nome anterior.

~~~SQL
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
~~~

~~~SQL
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
~~~

> c) Escreva uma query que atualize todas as informações do ator com o id 005

~~~SQL
UPDATE Actor
SET name = "Juliana Pães", salary = 800000, birth_date = "1980-04-27"
WHERE id = "005";
~~~

> d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo).
Teste, anote e explique o resultado. 

~~~SQL
UPDATE Actress
SET name = "Juliana Pães", salary = 800000, birth_date = "1980-04-27"
WHERE id = "005";
~~~

~~~SQL
Error Code: 1146. Table 'epps-douglas-florido.Actress' doesn't exist
~~~

Esse Erro diz que a tabela "Actress" não existe

### Exercicio 3

> a)  Escreva uma query que apague a atriz com o nome Fernanda Montenegro

~~~SQL
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
~~~

> b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

~~~SQL
DELETE FROM Actor WHERE (salary > 1000000 AND gender = "male");
~~~
























