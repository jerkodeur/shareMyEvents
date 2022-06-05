package co.simplon.p25.sharemyeventsapi.services;

import co.simplon.p25.sharemyeventsapi.entities.Actor;

public interface ActorService {
	Actor actorByAuthId();
	Long actorIdByAuthId();
}
