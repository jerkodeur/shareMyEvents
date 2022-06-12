package co.simplon.p25.sharemyeventsapi.security;

import java.util.Objects;

public final class Jwt {

	private final String token;

	public Jwt(String token) {
		Objects.requireNonNull(token, "token cannot be null");
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	@Override
	public String toString() {
		return String.format("Jwt [token=%s]", "[PROTECTED]");
	}

}
