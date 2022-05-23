package co.simplon.p25.sharemyeventapi.security;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Value("${sharemyevent.security.jwt.secret}")
	private String secret;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().logout().disable().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
				.authorizeRequests().antMatchers("/users/**").permitAll().and()
				.authorizeRequests().antMatchers("/events/**").authenticated()
				.and().authorizeRequests().antMatchers("/organizer/**")
				.authenticated().and().authorizeRequests().anyRequest()
				.authenticated().and().oauth2ResourceServer().jwt();
	}

	@Bean
	public JwtDecoder jwtDecoder() {
		SecretKey secretKey = new SecretKeySpec(secret.getBytes(),
				"HMACSHA256");
		return NimbusJwtDecoder.withSecretKey(secretKey)
				.macAlgorithm(MacAlgorithm.HS256).build();
	}
}
