#!/bin/bash

echo '----------'
echo 'Executing script: '$0
echo "reset sharemyevent database "
echo 'Started at '$(date +"%T.%3N %Z")
echo '----------'

echo 'Connect to postGres...'
psql -h localhost -p 5432 -U postgres <<MULTILIGNE
\i admin/database.sql
\c sharemyevents
\i ddl/actors-schema.sql
\i ddl/addresses-schema.sql
\i ddl/events-schema.sql
\i ddl/availabilities-schema.sql
\i ddl/participations-schema.sql
\i dml/actors-data.dml.sql
\i dml/availabilities-data.dml.sql
\i dml/addresses-data.dml.sql
\i dml/events-data.dml.sql
\i dml/participations-data.dml.sql
\q
MULTILIGNE

echo '----------'
echo 'Ended at '$(date +"%T.%3N %Z")
echo '----------'

exit 0