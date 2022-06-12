package co.simplon.p25.sharemyeventsapi.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import co.simplon.p25.sharemyeventsapi.dtos.ActorIdentityDto;
import co.simplon.p25.sharemyeventsapi.entities.Actor;

public interface ActorRepository extends JpaRepository<Actor, Long> {

	@Query("SELECT a.nickname as nickname FROM Actor a WHERE a.authId = ?1")
	ActorIdentityDto findActorIdentityByAuthId(UUID authId);

	Optional<Actor> findByAuthId(UUID authId);

	@Query("SELECT a.id FROM Actor a WHERE a.authId = ?1")
	Optional<Long> findActorIdByAuthId(UUID authId);

	@Query("SELECT a.id FROM Actor a WHERE a.email = ?1")
	Optional<Long> findActorIdByEmail(String email);

	@Query("SELECT a.authId as userUuid FROM Actor a WHERE email = ?1")
	Optional<UUID> findUserUuidByEmail(String email);

	@Query("SELECT a FROM Actor a WHERE a.email = ?1")
	Actor searchByEmail(String email);

	Optional<Actor> findByEmail(String email);

	boolean existsByEmail(String email);
}
