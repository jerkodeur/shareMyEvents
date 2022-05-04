package co.simplon.p25.sharemyeventapi.exceptions;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class CustomControllerAdvice extends ResponseEntityExceptionHandler{
   
    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException ex, HttpHeaders headers,
            HttpStatus status, WebRequest request) {
	
	Map<String, Object> body = new LinkedHashMap<>();
	
        String error = ex.getBindingResult().getFieldErrors().get(0).getDefaultMessage();
        body.put("error", error);
        body.put("code", status);
        body.put("status", status.value());
	
        return super.handleExceptionInternal(ex, body, headers, status, request);
    }
}
