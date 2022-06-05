package co.simplon.p25.sharemyeventsapi.exceptions;

import java.util.Map;

import org.springframework.http.HttpStatus;

//Custom Exception to handle external API errors in ControllerAdive
@SuppressWarnings("serial")
public class RestTemplateException extends RuntimeException {

	private HttpStatus status;

	private Map<String, Object> body;

	public RestTemplateException(HttpStatus status, Map<String, Object> body) {
		this.status = status;
		this.body = body;
	}

	public HttpStatus getStatus() {
		return status;
	}

	public Map<String, Object> getBody() {
		return body;
	}

}
