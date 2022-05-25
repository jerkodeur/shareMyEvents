package co.simplon.p25.sharemyeventapi.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import co.simplon.p25.sharemyeventapi.dtos.ActorIdentity;
import co.simplon.p25.sharemyeventapi.entities.Actor;

public interface ActorRepository extends JpaRepository<Actor, Long> {

	@Query("SELECT a.nickname as nickname FROM Actor a WHERE a.authId = ?1")
	ActorIdentity findActorIdentityByAuthId(UUID authId);

	Actor findByAuthId(UUID authId);

	@Query("SELECT a.id FROM Actor a WHERE a.authId = ?1")
	Long findActorIdByAuthId(UUID authId);
}
