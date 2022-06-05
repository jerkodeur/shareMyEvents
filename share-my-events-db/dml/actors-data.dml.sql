/*
 * psql -h localhost -p 5432 -U postgres -d gandalf_auth
 * \i dml/actors-data.dml.sql
 * \q
 */
DELETE FROM actors;
INSERT INTO actors
    (auth_id, email, nickname)
    VALUES
        ('11f0f2d8-e36d-4870-adf6-508009d22106', 'jerome.potie@gmail.com', 'Jéjé'),
        ('c67a349f-5a01-45ba-a564-ac5ec0e05bb9', 'jejouelas@hotmail.fr', 'Jéjé')
;

INSERT INTO actors (email)
    VALUES
        ('pat01@gmail.com'),('benji@hotmail.com'),('sebastien-p@wanadoo.fr'),('franceKop@yahoo.fr'),('ana25@gmail.com');