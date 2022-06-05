/*
 * psql -h localhost -p 5432 -U postgres -d sharemyevent
 * \i ddl/events-schema.sql
 * \q
 */

DROP TABLE IF EXISTS events;

CREATE TABLE "events" (
  	id SERIAL PRIMARY KEY,
  	code CHAR(8) UNIQUE NOT NULL,
  	title CHAR(50) NOT NULL,
  	description TEXT NOT NULL,
  	event_date TIMESTAMP NOT NULL,
  	organizer_id INTEGER NOT NULL,
  	address_id INTEGER,
	CONSTRAINT fk_event_organizer 
		FOREIGN KEY (organizer_id) 
		REFERENCES actors(id) 
		ON DELETE CASCADE,
	CONSTRAINT fk_event_address 
		FOREIGN KEY (address_id) 
		REFERENCES addresses(id) 
		ON DELETE SET NULL
);