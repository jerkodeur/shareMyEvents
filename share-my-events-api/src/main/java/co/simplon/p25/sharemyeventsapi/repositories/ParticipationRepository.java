package co.simplon.p25.sharemyeventsapi.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import co.simplon.p25.sharemyeventsapi.dtos.ParticipationDto;
import co.simplon.p25.sharemyeventsapi.entities.Actor;
import co.simplon.p25.sharemyeventsapi.entities.Event;
import co.simplon.p25.sharemyeventsapi.entities.Participation;

@Repository
public interface ParticipationRepository
		extends
			JpaRepository<Participation, Long> {

	List<Participation> findAllByeventId(Long eventId);

	boolean existsByName(String name);

	boolean existsByParticipantId(Long participantId);

	@Query("SELECT " + "p.id as id, "
			+ "p.name as name, p.participant.id as participantId, "
			+ "ac.email as email, " + "av.label as availability "
			+ "FROM Participation p " + "INNER JOIN p.participant ac "
			+ "LEFT JOIN p.availability av " + "WHERE p.event.id = ?1")
	List<ParticipationDto> findParticipationsByeventId(Long eventId);

	@Query(value = "SELECT " + "p.id as id, " + "p.name as name, "
			+ "ac.email as email, " + "av.label as availability "
			+ "FROM participations p "
			+ "INNER JOIN actors ac ON p.participant_id = ac.id "
			+ "LEFT JOIN availabilities av ON p.availability_id = av.id "
			+ "WHERE p.id = ? " + "LIMIT 1", nativeQuery = true)
	ParticipationDto findOneParticipationById(Long id);

	int countByEventId(Long getId);

	@Query(value = "SELECT * FROM participations WHERE name = ? AND event_id = ?", nativeQuery = true)
	Optional<Participation> existsByNameAndEventId(String name, Long eventId);

	@Query(value = "SELECT * FROM participations WHERE participant_id = ? AND event_id = ?", nativeQuery = true)
	Optional<Participation> existsByParticipantIdAndEventId(Long participantId,
			Long eventId);

	Optional<Participation> findByParticipantAndEvent(Actor participant,
			Event event);

	@Query("SELECT p.participant.id FROM Participation p WHERE p.event.id = ?1 ")
	List<Long> findParticipationsIdByeventId(Long eventId);
}
