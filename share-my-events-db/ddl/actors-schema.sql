/*
 * psql -h localhost -p 5432 -U postgres -d sharemyevent
 * \i ddl/actors-schema.sql
 * \q
 */

ALTER TABLE IF EXISTS events 
DROP CONSTRAINT fk_event_organizer;

ALTER TABLE IF EXISTS participations 
DROP CONSTRAINT participant_id;

DROP TABLE IF EXISTS actors;

CREATE TABLE "actors" (
  id SERIAL PRIMARY KEY,
  auth_id UUID UNIQUE,
  email VARCHAR(255) UNIQUE NOT NULL,
  nickname VARCHAR(100)
);

