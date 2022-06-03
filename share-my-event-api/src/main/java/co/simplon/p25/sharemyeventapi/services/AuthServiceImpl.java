package co.simplon.p25.sharemyeventapi.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.simplon.p25.sharemyeventapi.entities.Actor;
import co.simplon.p25.sharemyeventapi.exceptions.ResourceNotFoundException;
import co.simplon.p25.sharemyeventapi.repositories.ActorRepository;
import co.simplon.p25.sharemyeventapi.security.SecurityHelper;

@Service
public class AuthServiceImpl implements AuthService {

	@Autowired
	ActorRepository actorRepository;

	private AuthServiceImpl() {
		// Ensures non-instantiability
	}

	@Override
	public Long findActorIdByAuthId() {
		return actorRepository
				.findActorIdByAuthId(SecurityHelper.authenticatedUserId())
				.orElseThrow(() -> new ResourceNotFoundException(
						String.format("unknown_actor")));
	}

	@Override
	public Actor findActorByAuthId() {
		return actorRepository
				.findByAuthId(SecurityHelper.authenticatedUserId())
				.orElseThrow(() -> new ResourceNotFoundException(
						String.format("unknown_actor")));
	}

}
