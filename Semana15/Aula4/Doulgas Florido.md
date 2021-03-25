# Douglas Florido
## Exercicios Semana 15 Aula 3

### Exercicio 1

~~~SQL
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
~~~~

> a) Explique o que é uma chave estrangeira

Chave Estrangeira é a ligação de uma tabela com outra, ela se refere ao id de outra tabela.

> b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

~~~SQL
CREATE TABLE Rating (
        id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
        rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
~~~

~~~SQL
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom",
    7,
		"001"
);
~~~

~~~SQL
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Topzera demais, poderia ser melhor",
    5,
		"003"
);
~~~

~~~SQL
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"003",
    "Melhor filme que vi na vida!!!",
    10,
		"002"
);
~~~

> c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

~~~SQL
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-douglas-florido`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
~~~

Ele da um erro diz a Chave estrangeira falhou e nao encontrou nenhum filme

> d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

~~~SQL
ALTER TABLE Movies DROP COLUMN avaliacao;
~~~

> e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

~~~SQL
15:13:43	DELETE FROM Movies WHERE id = "002"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`epps-douglas-florido`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))	0.172 sec

~~~

não foi possivel fazer um delete pois o item possui uma chave estrangeira

### Exercicio 2

~~~SQL
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
~~~

> a) Explique, com as suas palavras, essa tabela

é uma Tabela com duas chaves estrangeiras, uma q relaciona o Filme, outra q relaciona o Ator

> b) Crie, ao menos, 6 relações nessa tabela

~~~SQL
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"002",
"001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"002",
"002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"003",
"002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"003",
"001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"004",
"004"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"004",
"005"
);
~~~

> c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query

~~~SQL
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-douglas-florido`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
~~~
A chave estrangeira nao conseguiu encontrar ninguém!

> d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query

~~~SQL
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`epps-douglas-florido`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
~~~
Não pode deltar um dado q está sendo usado em uma tabela como chave estrangeira

### Exercicio 3

~~~SQL
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
~~~

> a) Explique, com suas palavras, a query acima. O que é o operador `ON`?

A Query acima ela Devolve todos os filmes com seus respectivos comentários. O operador "on" indica a operação, ou seja quando movie.id for = rating.movie_id 

> b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

~~~SQL
SELECT Movies.id, nome, avaliacao FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;
~~~

### Exercicio 4

> a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário

~~~SQL
SELECT m.id as movie_id, m.nome, r.rate as rating, r.comment as rating_comment
FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id;
~~~

> b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator

~~~SQL
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movies m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
~~~

> c) Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)

~~~SQL
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movies m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
~~~

### Exercicio 5



















