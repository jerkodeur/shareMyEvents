package co.simplon.p25.sharemyeventapi.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.ResponseErrorHandler;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;

import co.simplon.p25.sharemyeventapi.exceptions.RestTemplateErrorHandler;

@Configuration
public class RestTemplateConfig {

	@Value("${sharemyevent.api.access.url}")
	private String sharemyeventRootUri;

	@Value("${gandalf.api.access.url}")
	private String gandalfRootUri;

	@Value("${gandalf.client-name}")
	private String gandalfClientName;

	@Value("${gandalf.api-key}")
	private String gandalfClientKey;

	@Value("${herald.api.root-uri}")
	private String heraldRootUri;

	@Value("${herald.api.client-name}")
	private String heraldClientName;

	@Value("${herald.api.client-key}")
	private String heraldClientKey;

	private final ObjectMapper objectMapper;

	public RestTemplateConfig(ObjectMapper objectMapper) {
		this.objectMapper = objectMapper;
	}

	@Bean
	public RestTemplate gandalfRestTemplate(RestTemplateBuilder builder) {
		RestTemplate template = builder.rootUri(gandalfRootUri)
				.defaultHeader("client-name", gandalfClientName)
				.defaultHeader("client-api-key", gandalfClientKey)
				.errorHandler(errorHandler()).build();
		template.setRequestFactory(requestFactory());
		return template;
	}

	@Bean
	public RestTemplate heraldRestTemplate(RestTemplateBuilder builder) {
		RestTemplate template = builder.rootUri(heraldRootUri)
				.defaultHeader("API-Client-Name", heraldClientName)
				.defaultHeader("API-Key", heraldClientKey)
				.errorHandler(errorHandler()).build();
		template.setRequestFactory(requestFactory());
		return template;
	}

	@Bean
	protected ResponseErrorHandler errorHandler() {
		return new RestTemplateErrorHandler(objectMapper);
	}

	@Bean
	protected ClientHttpRequestFactory requestFactory() {
		return new HttpComponentsClientHttpRequestFactory();
	}

}
