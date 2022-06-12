/*
 * psql -h localhost -p 5432 -U postgres -d gandalf_auth
 * \i dml/addresses-data.dml.sql
 * \q
 */
DELETE FROM addresses;
INSERT INTO addresses
    (street, zip_code, locality, additional)
    values
        (
	        '25 avenue de la résistance',
	        '78700',
	        'conflans-sainte-honorine',
	        'Au fond de la cour à gauche, 3ème étage sans ascenseur...'
        );