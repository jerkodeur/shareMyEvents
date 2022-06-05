package co.simplon.p25.sharemyeventsapi.controllers.errors;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import co.simplon.p25.sharemyeventsapi.exceptions.ExistException;
import co.simplon.p25.sharemyeventsapi.exceptions.ForbiddenException;
import co.simplon.p25.sharemyeventsapi.exceptions.ResourceNotFoundException;
import co.simplon.p25.sharemyeventsapi.exceptions.RestTemplateException;

@RestControllerAdvice
public class ControllerAdvice extends ResponseEntityExceptionHandler {

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(
			MethodArgumentNotValidException ex, HttpHeaders headers,
			HttpStatus status, WebRequest request) {

		Map<String, Object> body = new LinkedHashMap<>();

		String error = ex.getBindingResult().getFieldErrors().get(0)
				.getDefaultMessage();
		body.put("code_error", error);
		body.put("status", status);
		body.put("status_code", status.value());

		return super.handleExceptionInternal(ex, body, headers, status,
				request);
	}

	// Handle RestTemplateException to forward external APIs status
	// and optional body in case of error
	@ExceptionHandler(RestTemplateException.class)
	protected ResponseEntity<Object> handleRestTemplateException(
			RestTemplateException ex, WebRequest request) {
		return super.handleExceptionInternal(ex, ex.getBody(),
				new HttpHeaders(), ex.getStatus(), request);
	}

	@ExceptionHandler(ForbiddenException.class)
	protected ResponseEntity<Object> handleForbiddenException(
			ForbiddenException ex, WebRequest request) {
		return super.handleExceptionInternal(ex, ex.getMessage(),
				new HttpHeaders(), HttpStatus.FORBIDDEN, request);
	}

	@ExceptionHandler(ResourceNotFoundException.class)
	protected ResponseEntity<Object> handleResourceNotException(
			ResourceNotFoundException ex, WebRequest request) {
		Map<String, Object> body = new LinkedHashMap<>();
		body.put("code_error", ex.getMessage());

		return super.handleExceptionInternal(ex, body, new HttpHeaders(),
				HttpStatus.NOT_FOUND, request);
	}

	@ExceptionHandler(ExistException.class)
	protected ResponseEntity<Object> handleExistException(ExistException ex,
			WebRequest request) {
		Map<String, Object> body = new LinkedHashMap<>();
		body.put("code_error", ex.getMessage());

		return super.handleExceptionInternal(ex, body, new HttpHeaders(),
				HttpStatus.BAD_REQUEST, request);
	}

}