/*
 * psql -h localhost -p 5432 -U postgres -d gandalf_auth
 * \i dml/actors-data.dml.sql
 * \q
 */
DELETE FROM availabilities;
INSERT INTO availabilities (label) values('Disponible'), ('Incertain'), ('Indisponible')
;