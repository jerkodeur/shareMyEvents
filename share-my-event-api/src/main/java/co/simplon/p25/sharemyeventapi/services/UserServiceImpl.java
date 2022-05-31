package co.simplon.p25.sharemyeventapi.services;

import java.util.UUID;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import co.simplon.p25.sharemyeventapi.dtos.ActorIdentityDto;
import co.simplon.p25.sharemyeventapi.dtos.ActorSignUpDto;
import co.simplon.p25.sharemyeventapi.dtos.user.LostPasswordDto;
import co.simplon.p25.sharemyeventapi.dtos.user.ResetPasswordDto;
import co.simplon.p25.sharemyeventapi.dtos.user.UserLogInDto;
import co.simplon.p25.sharemyeventapi.dtos.user.UserMailDto;
import co.simplon.p25.sharemyeventapi.dtos.user.UserResetPasswordDto;
import co.simplon.p25.sharemyeventapi.dtos.user.UserSignUpDto;
import co.simplon.p25.sharemyeventapi.dtos.user.UserUuidDto;
import co.simplon.p25.sharemyeventapi.entities.Actor;
import co.simplon.p25.sharemyeventapi.exceptions.ResourceNotFoundException;
import co.simplon.p25.sharemyeventapi.repositories.ActorRepository;
import co.simplon.p25.sharemyeventapi.security.ActorJwt;
import co.simplon.p25.sharemyeventapi.security.Jwt;

@Service
public final class UserServiceImpl implements UserService {

	private final ActorRepository actorRepo;
	private final RestTemplate restTemplate;
	private final JwtDecoder decoder;

	public UserServiceImpl(ActorRepository actorRepo, RestTemplate restTemplate,
			JwtDecoder decoder) {
		this.actorRepo = actorRepo;
		this.restTemplate = restTemplate;
		this.decoder = decoder;
	}

	@Override
	public void signUp(@Valid ActorSignUpDto actor) {

		UserSignUpDto userSignUpDto = new UserSignUpDto(actor.getEmail(),
				actor.getPassword());

		ResponseEntity<UserUuidDto> response = restTemplate.postForEntity(
				"/users/create", userSignUpDto, UserUuidDto.class);
		actor.setAuthId(response.getBody().getUuid());

		Actor newActor = new Actor(actor.getAuthId(), actor.getEmail(),
				actor.getNickname());

		actorRepo.save(newActor);
	}

	@Override
	public ActorJwt login(UserLogInDto inputs) {

		ResponseEntity<ActorJwt> response = restTemplate
				.postForEntity("/users/login", inputs, ActorJwt.class);

		Jwt gandalfToken = response.getBody().getToken();
		UUID userUuid = UUID.fromString(
				decoder.decode(gandalfToken.getToken()).getSubject());
		ActorIdentityDto actorIdentityDto = actorRepo
				.findActorIdentityByAuthId(userUuid);
		ActorJwt actorJwt = new ActorJwt();
		actorJwt.setToken(gandalfToken);
		actorJwt.setActor(actorIdentityDto);
		return actorJwt;
	}

	@Override
	public void lostPassword(@Valid UserMailDto inputs) {
		Actor actor = actorRepo.findByEmail(inputs.getEmail())
				.orElseThrow(() -> new ResourceNotFoundException(
						String.format("unknown_user")));

		String mailHeader = String.format(
				"<p>Bonjour %s,<br> vous avez demandé la réinitialisation de votre mot de passe, </p>",
				actor.getNickname());
		String mailFooter = String.format(
				"<p>Si vous n'êtes pas à l'origine de cette demande, "
						+ "merci de contacter l'administrateur du site.</p>"
						+ "<p>"
						+ "<strong>Vous pouvez soit continuer d'utiliser ce mot de passe</strong>, "
						+ "ou <strong>vous pouvez le modifier à l'adresse suivante</strong>:<br><br> "
						+ "<a href=\"http://localhost:4200/password-reset\" target=\"blank\"> Page de modification du mot de passe </a>"
						+ "</p>" + "<p>A très vite sur sharemyevents %s! </p>",
				actor.getNickname());

		LostPasswordDto lostPassword = new LostPasswordDto(actor.getAuthId(),
				mailHeader, mailFooter);

		restTemplate.patchForObject("/users/lost-password", lostPassword,
				String.class);

	}

	@Override
	public void resetPassword(@Valid UserResetPasswordDto inputs) {
		UUID userUuid = actorRepo.findUserUuidByEmail(inputs.getEmail())
				.orElseThrow(() -> new ResourceNotFoundException(
						String.format("Unknown user")));

		ResetPasswordDto resetPassword = new ResetPasswordDto();
		resetPassword.setUserUuid(userUuid);
		resetPassword.setOldPassword(inputs.getOldPassword());
		resetPassword.setNewPassword(inputs.getNewPassword());

		restTemplate.patchForObject("/users/reset-password", resetPassword,
				String.class);
	}

}
