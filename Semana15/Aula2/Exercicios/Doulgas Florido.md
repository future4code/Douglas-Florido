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

### Exercicio 4

> a) Escreva uma query que pegue o maior salário de todos os atores e atrizes*

~~~SQL
SELECT MAX(salary) FROM Actor;
~~~

> b) Escreva uma query que pegue o menor salário das atrizes

~~~SQL
SELECT MIN(salary) FROM Actor WHERE gender = "female";
~~~

> c) Escreva uma query que pegue a quantidade de atrizes
~~~SQL
SELECT COUNT(*) FROM Actor WHERE gender = "female";
~~~
> d) Escreva uma query que pegue a soma de todos os salários

~~~SQL
SELECT SUM(salary) FROM Actor;
~~~

### Exercicio 5

> a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
~~~SQL
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
~~~
Conta cada Linha, e mostra o genero, da tabela ACtor, agrupando pelo Genero

> b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
~~~SQL
SELECT id, name FROM Actor
ORDER BY name DESC;
~~~
> c) Faça uma query que retorne todos os atores ordenados pelo salário

~~~SQL
SELECT * FROM Actor
WHERE gender = "male"
ORDER BY salary ASC;
~~~

> d) Faça uma query que retorne os atores com os três maiores salarios

~~~SQL
SELECT * FROM Actor
WHERE gender = "male"
ORDER BY salary ASC
LIMIT 3;
~~~

> e) Faça uma query que retorne a média de salário por gênero

~~~SQL
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
~~~

### Exercicio 6

> a) Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema. 

~~~SQL
ALTER TABLE Movies ADD playing_limit_date DATE;
~~~

> b) Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.

~~~SQL
ALTER TABLE Movies CHANGE rating rating FLOAT;
~~~

> c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído

~~~SQL
UPDATE Movies
SET
playing_limit_date = "2020-12-31"
WHERE id = "001";
~~~

~~~SQL
UPDATE Movies
SET	playing_limit_date = "2008-07-02"
WHERE id = "002";
~~~

> d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

~~~SQL
DELETE FROM Movies WHERE id = "001";
~~~

~~~SQL
UPDATE Movies
SET	sinopse = "zyk4"
WHERE id = "001";
~~~

~~~SQL
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
~~~

Ele atualizou, mas nao encontrou nenhuma linha para atualizar, ou seja, o comando da correto, só nao possui linha para atualizar

### Exercicio 7

> a) Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?

~~~SQL
SELECT COUNT(*) FROM Movies WHERE (avaliacao > 7.5);
~~~

> b) Qual a média das avaliações dos filmes?

~~~SQL
SELECT AVG(avaliacao) FROM Movies;
~~~

> c) Qual a quantidade de filmes em cartaz?

~~~SQL
SELECT COUNT(avaliacao) FROM Movies WHERE playing_limit_date>CURDATE();
~~~

> d) Qual a quantidade de filmes que ainda irão lançar?

~~~SQL
SELECT COUNT(avaliacao) FROM Movies WHERE playing_limit_date<CURDATE();
~~~

> e) Qual a maior nota dos filmes?

~~~SQL
SELECT MAX(avaliacao) FROM Movies;
~~~

> f) Qual a menor nota dos filmes?

~~~SQL
SELECT MIN(avaliacao) FROM Movies;
~~~

### Exercicio 8

> a) Retorne todos os filmes em ordem alfabética

~~~SQL
SELECT * FROM Movies ORDER BY nome ASC;
~~~

> b) Retorne os 5 primerios filmes em ordem descrente alfabética*

~~~SQL
SELECT * FROM Movies ORDER BY nome DESC LIMIT 5;
~~~

> c) Retorne os 3 filmes mais recentes em cartaz

~~~SQL
SELECT * from Movies ORDER BY playing_limit_date DESC LIMIT 3;
~~~

> d) Retorne os 3 filmes melhor avalidos

~~~SQL
SELECT * FROM Movies ORDER BY avaliacao DESC LIMIT 3;
~~~




















