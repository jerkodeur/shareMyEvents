/*
 * psql -h localhost -p 5432 -U postgres -d sharemyevent
 * \i ddl/addresses-schema.sql
 * \q
 */

DROP TABLE IF EXISTS addresses;

CREATE TABLE "addresses" (
  id SERIAL PRIMARY KEY,
  street VARCHAR(255),
  zip_code SMALLINT,
  locality VARCHAR(75),
  additional TEXT,
  UNIQUE(street, zip_code, locality)
);