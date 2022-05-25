/*
 * psql -h localhost -p 5432 -U postgres -d sharemyevent
 * \i ddl/participations-schema.sql
 * \q
 */

DROP TABLE IF EXISTS participations;

CREATE TABLE "participations" (
  	id SERIAL PRIMARY KEY,
	name varchar(255) NOT NULL UNIQUE,
	participant_id INTEGER NOT NULL,
	event_id INTEGER NOT NULL,
	availability_id INTEGER,
	CONSTRAINT fk_participations_participant 
		FOREIGN KEY (participant_id) 
		REFERENCES actors(id) 
		ON DELETE CASCADE,
	CONSTRAINT fk_participations_event 
		FOREIGN KEY (event_id) 
		REFERENCES events(id) 
		ON DELETE CASCADE,
	CONSTRAINT fk_participations_availability 
		FOREIGN KEY (availability_id) 
		REFERENCES availabilities(id) 
		ON UPDATE CASCADE 
);