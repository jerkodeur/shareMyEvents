/*
 * Command lines from 'admin' folder:
 * psql -h localhost -p 5432 -U postgres
 * \i database.sql
 * \q
 */

DROP DATABASE IF EXISTS sharemyevent;
CREATE DATABASE "sharemyevent" WITH OWNER "postgres" ENCODING 'UTF8';