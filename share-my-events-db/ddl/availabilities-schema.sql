/*
 * psql -h localhost -p 5432 -U postgres -d sharemyevent
 * \i ddl/availabilities-schema.sql
 * \q
 */

DROP TABLE IF EXISTS availabilities cascade;

CREATE TABLE "availabilities" (
  id SERIAL PRIMARY KEY,
  label CHAR(12) UNIQUE NOT NULL
);