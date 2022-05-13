/*
 * psql -h localhost -p 5432 -U postgres -d gandalf_auth
 * \i dml/actors-data.dml.sql
 * \q
 */
DELETE FROM actors;
INSERT INTO actors
    (auth_id, email, firstname, lastname)
    values
        ('11f0f2d8-e36d-4870-adf6-508009d22106', 'jerome.potie@gmail.com', 'Potié', 'Jérôme'),
        ('4d6f531e-ef47-42b1-85a2-b891b0fe3909', 'jejouelas@hotmail.fr', null, null)
;