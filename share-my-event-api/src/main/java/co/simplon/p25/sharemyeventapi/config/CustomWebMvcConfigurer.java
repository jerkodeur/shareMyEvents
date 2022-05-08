package co.simplon.p25.sharemyeventapi.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CustomWebMvcConfigurer implements WebMvcConfigurer{

    @Value("${sharemyevent.cors.allowed-origins}")
    private String[] allowedOrigins;

    @Value("${sharemyevent.cors.allowed-methods}")
    private String[] allowedMethods;
    
    /**
     * Disables use of trailing slash match. Thus, a method mapped to "/api"
     * does not match to "/api/"; in a <i>Restful perspective</i> they are not
     * considered as the same identifiers.
     */
    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
	configurer.setUseTrailingSlashMatch(false);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
	registry.addMapping("/**").allowedOrigins(allowedOrigins)
		.allowedMethods(allowedMethods);
    }
}
