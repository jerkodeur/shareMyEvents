package co.simplon.p25.sharemyeventapi.services;

import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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

	@Autowired
	ActorRepository actorRepo;

	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	JwtDecoder decoder;

	private UserServiceImpl() {
		// Ensures non-instantiability
	}

	@Override
	public void signUp(@Valid ActorSignUpDto actor) {

		UserSignUpDto userSignUpDto = new UserSignUpDto(actor.getEmail(),
				actor.getPassword());

		ResponseEntity<UserGandalfId> response = restTemplate.postForEntity(
				"/users/create", userSignUpDto, UserGandalfId.class);

		actor.setGandalfId(response.getBody().getGandalfId());

		Actor newActor = new Actor(actor.getGandalfId(), actor.getEmail(),
				actor.getFirstname(), actor.getLastname());

		actorRepo.save(newActor);
	}

	@Override
	public ActorJwt login(UserLogInDto userLogInInputs) {

		ResponseEntity<ActorJwt> response = restTemplate
				.postForEntity("/users/login", userLogInInputs, ActorJwt.class);

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

}
