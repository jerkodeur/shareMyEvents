package co.simplon.p25.sharemyeventsapi.exceptions;

import org.springframework.security.authentication.BadCredentialsException;

@SuppressWarnings("serial")
public class ResourceNotFoundException extends BadCredentialsException {
	public ResourceNotFoundException(String message) {
		super(message);
	}
}
