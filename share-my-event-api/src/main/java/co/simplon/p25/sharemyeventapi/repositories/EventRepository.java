package co.simplon.p25.sharemyeventapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import co.simplon.p25.sharemyeventapi.dtos.NextEventHomeDto;
import co.simplon.p25.sharemyeventapi.entities.Event;

public interface EventRepository extends JpaRepository<Event, Long> {

	@Query(value = "SELECT id, title, event_date as eventDate FROM events WHERE organizer_id = :organizerID ORDER BY eventDate DESC LIMIT :limit", nativeQuery = true)
	NextEventHomeDto findNextEventByOrganizerIdLimitTo(
			@Param("organizerID") int organizerId, @Param("limit") int limit);

	Event findOneById(Long eventId);
}
