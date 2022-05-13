/*
 * psql -h localhost -p 5432 -U postgres -d sharemyevent
 * \i ddl/actors-schema.sql
 * \q
 */

DROP TABLE IF EXISTS actors;

CREATE TABLE "actors" (
  id SERIAL PRIMARY KEY,
  auth_id CHAR(36) UNIQUE,
  email VARCHAR(255) UNIQUE NOT NULL,
  firstname VARCHAR(100),
  lastname VARCHAR(100),
  nickname VARCHAR(25)
);
