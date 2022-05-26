/*
 * psql -h localhost -p 5432 -U postgres -d sharemyevent
 * \i dml/participations-data.dml.sql
 * \q
 */

INSERT INTO participations (name, participant_id, event_id) VALUES
  ('Jérôme', 2, 1 ),
  ('Pat', 3, 1 ),
  ('Benj', 4, 1 ),
  ('Seb', 5, 1 ),
  ('François', 6, 1 ),
  ('Annabelle', 7, 1 )
;