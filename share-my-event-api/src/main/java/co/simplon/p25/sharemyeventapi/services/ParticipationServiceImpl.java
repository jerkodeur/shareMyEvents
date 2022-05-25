package co.simplon.p25.sharemyeventapi.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import co.simplon.p25.sharemyeventapi.dtos.ParticipantCreateDto;
import co.simplon.p25.sharemyeventapi.entities.Actor;
import co.simplon.p25.sharemyeventapi.entities.Participation;
import co.simplon.p25.sharemyeventapi.exceptions.ExistException;
import co.simplon.p25.sharemyeventapi.repositories.ActorRepository;
import co.simplon.p25.sharemyeventapi.repositories.ParticipationRepository;

@Service
public class ParticipationServiceImpl implements ParticipationService {

	private final ParticipationRepository repo;
	private final ActorRepository actorRepo;

	public ParticipationServiceImpl(ParticipationRepository repo,
			ActorRepository actorRepo) {
		this.repo = repo;
		this.actorRepo = actorRepo;
	}

	@Override
	public List<Participation> getAll(Long eventId) {
		return repo.findAllByeventId(eventId);
	}

	@Override
	@Transactional
	public void add(ParticipantCreateDto inputs) {
		Long actorId;

		if (actorRepo.existsActorByEmail(inputs.getEmail())) {
			actorId = actorRepo.findActorIdByEmail(inputs.getEmail());
			if (repo.existsByParticipantId(actorId)) {
				throw new ExistException("participant_exist");
			}
		} else {
			Actor actor = new Actor();
			actor.setEmail(inputs.getEmail());
			actorRepo.save(actor);
			actorId = actor.getId();
		}

		Participation participation = new Participation();
		participation.setEventId(inputs.getEventId());
		participation.setName(inputs.getName());
		participation.setParticipantId(actorId);
		repo.save(participation);
	}

	@Override
	@Transactional
	public void remove(Long eventId, String participantEmail) {
		Long participantId = actorRepo.findActorIdByEmail(participantEmail);
		repo.deleteByEventAndActorId(eventId, participantId);
	}

}
