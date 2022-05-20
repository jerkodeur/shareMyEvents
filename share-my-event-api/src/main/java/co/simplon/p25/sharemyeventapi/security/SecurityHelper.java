package co.simplon.p25.sharemyeventapi.security;

import java.util.UUID;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public final class SecurityHelper {

	private SecurityHelper() {
		// Ensures non-instantiability
	}

	/**
	 * Returns the authenticated user id (token subject).
	 *
	 * @return the authenticated user id
	 */
	public static UUID authenticatedUserId() {
		Authentication auth = SecurityContextHolder.getContext()
				.getAuthentication();

		return UUID.fromString(auth.getName());
	}
}
