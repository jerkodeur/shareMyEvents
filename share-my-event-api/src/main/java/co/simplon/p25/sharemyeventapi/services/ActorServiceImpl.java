package co.simplon.p25.sharemyeventapi.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.simplon.p25.sharemyeventapi.entities.Actor;
import co.simplon.p25.sharemyeventapi.repositories.ActorRepository;
import co.simplon.p25.sharemyeventapi.security.SecurityHelper;

@Service
public class ActorServiceImpl implements ActorService {

	@Autowired
	ActorRepository actorRepo;

	private ActorServiceImpl() {
		// Ensures non-instantiability
	}

	@Override
	public Actor actorByAuthId() {
		return actorRepo.findByAuthId(SecurityHelper.authenticatedUserId());
	}

	@Override
	public Long actorIdByAuthId() {
		return actorRepo
				.findActorIdByAuthId(SecurityHelper.authenticatedUserId());
	}

}
