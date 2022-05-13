package co.simplon.p25.sharemyeventapi.services;

import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import co.simplon.p25.sharemyeventapi.dtos.ActorIdentity;
import co.simplon.p25.sharemyeventapi.dtos.ActorSignUpDto;
import co.simplon.p25.sharemyeventapi.dtos.UserGandalfId;
import co.simplon.p25.sharemyeventapi.dtos.UserLogInDto;
import co.simplon.p25.sharemyeventapi.dtos.UserSignUpDto;
import co.simplon.p25.sharemyeventapi.entities.Actor;
import co.simplon.p25.sharemyeventapi.repositories.ActorRepository;
import co.simplon.p25.sharemyeventapi.security.ActorJwt;
import co.simplon.p25.sharemyeventapi.security.Jwt;

@Service
public final class UserServiceImpl implements UserService {

	@Value("gandalf.api.access.url")
	private String gandalfUrl;

	@Value("${gandalf.client-name}")
	private String clientName;

	@Value("${gandalf.api-key}")
	private String apiKey;

	@Autowired
	ActorRepository actorRepo;

	@Autowired
	RestTemplate restTemplate;

	@Autowired
	JwtDecoder decoder;

	public UserServiceImpl() {
	}

	@Override
	public void signUp(@Valid ActorSignUpDto actor) {

		UserSignUpDto userSignUpDto = new UserSignUpDto(actor.getEmail(),
				actor.getPassword());

		HttpEntity<UserSignUpDto> entity = new HttpEntity<UserSignUpDto>(
				userSignUpDto, gandalfClientHeaders());

		ResponseEntity<UserGandalfId> response = restTemplate.postForEntity(
				"http://localhost:9090/users/create", entity,
				UserGandalfId.class);

		actor.setGandalfId(response.getBody().getGandalfId());

		Actor newActor = new Actor(actor.getGandalfId(), actor.getEmail(),
				actor.getFirstname(), actor.getLastname());

		actorRepo.save(newActor);
	}

	@Override
	public ActorJwt login(UserLogInDto userLogInInputs) {

		HttpEntity<UserLogInDto> entity = new HttpEntity<UserLogInDto>(
				userLogInInputs, gandalfClientHeaders());

		ResponseEntity<ActorJwt> response = restTemplate.postForEntity(
				"http://localhost:9090/users/login", entity, ActorJwt.class);

		Jwt gandalfToken = response.getBody().getToken();
		UUID userUuid = UUID.fromString(
				decoder.decode(gandalfToken.getToken()).getSubject());
		ActorIdentity actorIdentity = actorRepo
				.findActorIdentityByAuthId(userUuid.toString());
		ActorJwt actorJwt = new ActorJwt();
		actorJwt.setToken(gandalfToken);
		actorJwt.setActor(actorIdentity);
		return actorJwt;
	}

	private HttpHeaders gandalfClientHeaders() {
		HttpHeaders headers = new HttpHeaders();

		headers.set("client-name", clientName);
		headers.set("client-api-key", apiKey);

		return headers;
	}

}
