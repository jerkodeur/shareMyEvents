package co.simplon.p25.sharemyeventsapi.exceptions;

@SuppressWarnings("serial")
public final class ForbiddenException extends RuntimeException {

	public ForbiddenException(String message) {
		super(message);
	}
}