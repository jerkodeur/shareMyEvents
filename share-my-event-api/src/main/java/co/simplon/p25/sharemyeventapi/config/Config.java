package co.simplon.p25.sharemyeventapi.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.web.client.RestTemplate;

public class Config {
    @Value("${gandalf.client-name}")
    private String gandalfClientName;
	
    @Value("${gandalf.api-key}")
    private String gandalfApiKey;
    
    @Bean
    public void restTemplate(String route) {
	String url = "http://localhost:9090/" + route;
	
	RestTemplate restTemplate = new RestTemplate();
	
	HttpHeaders httpHeaders = new HttpHeaders();
	httpHeaders.set("api-key", gandalfClientName);
	httpHeaders.set("api-key", gandalfApiKey);
	
	
	
    }

}
