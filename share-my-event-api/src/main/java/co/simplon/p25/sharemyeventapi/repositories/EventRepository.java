package co.simplon.p25.sharemyeventapi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import co.simplon.p25.sharemyeventapi.dtos.EventListItem;
import co.simplon.p25.sharemyeventapi.dtos.NextEventHomeDto;
import co.simplon.p25.sharemyeventapi.dtos.OrganizerEventListItem;
import co.simplon.p25.sharemyeventapi.entities.Actor;
import co.simplon.p25.sharemyeventapi.entities.Event;

public interface EventRepository extends JpaRepository<Event, Long> {

	@Query(value = "SELECT e.id as id, e.event_date as eventDate, e.title as title, "
			+ "(SELECT COUNT(*) FROM participations p WHERE p.event_id = e.id) as nbParticipants "
			+ "FROM events e WHERE organizer_id = ? ORDER BY event_date ASC LIMIT 1", nativeQuery = true)
	NextEventHomeDto findNextEventByOrganizerId(Long organizerId);

	@Query(value = "SELECT "
			+ " e.id as id, e.event_date as eventDate, e.title as title, a.nickname as organizer, "
			+ "(SELECT COUNT(*) FROM participations p WHERE p.event_id = e.id) as nbParticipants "
			+ "FROM events e " + "INNER JOIN actors a ON e.organizer_id = a.id "
			+ "WHERE e.organizer_id = ? "
			+ "ORDER BY e.event_date ASC ", nativeQuery = true)
	List<EventListItem> findParticipantEventsByOrganizerId(Long organizerId);

	@Query(value = "SELECT "
			+ " e.id as id, e.event_date as eventDate, e.title as title, "
			+ "(SELECT COUNT(*) FROM participations p WHERE p.event_id = e.id) as nbParticipants "
			+ "FROM events e " + "WHERE e.organizer_id = ? "
			+ "ORDER BY e.event_date ASC ", nativeQuery = true)
	List<OrganizerEventListItem> findOrganizerEventsByOrganizerId(
			Long organizerId);

	Event findOneById(Long eventId);

	@Query("SELECT e.organizer FROM Event e WHERE e.id = ?1 ")
	Actor findOrganizerByEventId(Long event_id);

}
