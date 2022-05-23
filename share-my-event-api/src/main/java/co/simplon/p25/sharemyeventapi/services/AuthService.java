package co.simplon.p25.sharemyeventapi.services;

import co.simplon.p25.sharemyeventapi.entities.Actor;

public interface AuthService {

	public Long findActorIdByAuthId();
	public Actor findActorByAuthId();
}
