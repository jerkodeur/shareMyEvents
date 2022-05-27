package co.simplon.p25.sharemyeventapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import co.simplon.p25.sharemyeventapi.entities.Actor;
import co.simplon.p25.sharemyeventapi.entities.Event;

public interface EventRepository extends JpaRepository<Event, Long> {

	@Query(value = "SELECT * FROM events WHERE organizer_id = ? ORDER BY event_date ASC LIMIT 1", nativeQuery = true)
	Event findNextEventByOrganizerId(Long organizerId);

	Event findOneById(Long eventId);

	@Query("SELECT e.organizer FROM Event e WHERE e.id = ?1 ")
	Actor findOrganizerByEventId(Long event_id);

}
