package co.simplon.p25.sharemyeventapi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import co.simplon.p25.sharemyeventapi.dtos.ParticipationDto;
import co.simplon.p25.sharemyeventapi.entities.Participation;

@Repository
public interface ParticipationRepository
		extends
			JpaRepository<Participation, Long> {

	List<Participation> findAllByeventId(Long eventId);

	boolean existsByName(String name);

	boolean existsByParticipantId(Long participantId);

	@Query("SELECT " + "p.id as id, " + "p.name as name, "
			+ "ac.email as email, " + "av.label as availability "
			+ "FROM Participation p " + "INNER JOIN p.participant ac "
			+ "LEFT JOIN p.availability av " + "WHERE p.event.id = ?1")
	List<ParticipationDto> findParticipationsByeventId(Long eventId);

}
