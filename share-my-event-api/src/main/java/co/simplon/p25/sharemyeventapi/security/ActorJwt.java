package co.simplon.p25.sharemyeventapi.security;

import co.simplon.p25.sharemyeventapi.dtos.ActorIdentity;

public final class ActorJwt {

	private Jwt token;

	private ActorIdentity actor;

	public ActorJwt() {
	}

	public Jwt getToken() {
		return token;
	}

	public void setToken(Jwt token) {
		this.token = token;
	}

	public ActorIdentity getActor() {
		return actor;
	}

	public void setActor(ActorIdentity actor) {
		this.actor = actor;
	}

	@Override
	public String toString() {
		return "GandalfJwt [token=" + "[PROTECTED]" + ", actor=" + actor + "]";
	}

}
