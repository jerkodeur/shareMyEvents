package co.simplon.p25.sharemyeventsapi.security;

import co.simplon.p25.sharemyeventsapi.dtos.ActorIdentityDto;

public final class ActorJwt {

	private Jwt token;

	private ActorIdentityDto actor;

	public ActorJwt() {
	}

	public Jwt getToken() {
		return token;
	}

	public void setToken(Jwt token) {
		this.token = token;
	}

	public ActorIdentityDto getActor() {
		return actor;
	}

	public void setActor(ActorIdentityDto actor) {
		this.actor = actor;
	}

	@Override
	public String toString() {
		return "GandalfJwt [token=" + "[PROTECTED]" + ", actor=" + actor + "]";
	}

}
