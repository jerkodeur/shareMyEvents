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
        ('4d6f531e-ef47-42b1-85a2-b891b0fe3909', 'jejouelas@hotmail.fr', null)
;

INSERT INTO actors (email)
    VALUES
        ('pat01@gmail.com'),('benji@hotmail.com'),('sebastien-p@wanadoo.fr'),('franceKop@yahoo.fr'),('ana25@gmail.com');