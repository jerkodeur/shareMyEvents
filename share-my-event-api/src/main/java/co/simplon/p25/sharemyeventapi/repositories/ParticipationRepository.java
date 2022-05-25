package co.simplon.p25.sharemyeventapi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import co.simplon.p25.sharemyeventapi.entities.Participation;

@Repository
public interface ParticipationRepository
		extends
			JpaRepository<Participation, Long> {

	List<Participation> findAllByeventId(Long eventId);

	@Modifying
	@Query("DELETE FROM Participation p WHERE p.eventId = ?1 AND p.participantId = ?2")
	void deleteByEventAndActorId(Long eventId, Long participantId);

	boolean existsByName(String name);

	boolean existsByParticipantId(Long participantId);

}
