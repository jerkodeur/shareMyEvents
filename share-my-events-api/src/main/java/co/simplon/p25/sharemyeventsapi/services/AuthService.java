package co.simplon.p25.sharemyeventsapi.services;

import co.simplon.p25.sharemyeventsapi.entities.Actor;

public interface AuthService {

	public Long findActorIdByAuthId();
	public Actor findActorByAuthId();
}
