package co.simplon.p25.sharemyeventapi.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import co.simplon.p25.sharemyeventapi.dtos.ParticipantCreateDto;
import co.simplon.p25.sharemyeventapi.dtos.ParticipationDto;
import co.simplon.p25.sharemyeventapi.entities.Actor;
import co.simplon.p25.sharemyeventapi.entities.Participation;
import co.simplon.p25.sharemyeventapi.exceptions.ExistException;
import co.simplon.p25.sharemyeventapi.repositories.ActorRepository;
import co.simplon.p25.sharemyeventapi.repositories.EventRepository;
import co.simplon.p25.sharemyeventapi.repositories.ParticipationRepository;

@Service
public class ParticipationServiceImpl implements ParticipationService {

	private final ParticipationRepository repo;
	private final ActorRepository actorRepo;
	private final EventRepository eventRepo;

	public ParticipationServiceImpl(ParticipationRepository repo,
			ActorRepository actorRepo, EventRepository eventRepo) {
		this.repo = repo;
		this.actorRepo = actorRepo;
		this.eventRepo = eventRepo;
	}

	@Override
	public List<ParticipationDto> getAll(Long eventId) {
		List<ParticipationDto> participations = repo
				.findParticipationsByeventId(eventId);
		return participations;
	}

	@Override
	@Transactional
	public ParticipationDto add(ParticipantCreateDto inputs) {
		Actor actor;

		if (actorRepo.existsActorByEmail(inputs.getEmail())) {
			actor = actorRepo.findByEmail(inputs.getEmail());
			if (repo.existsByParticipantId(actor.getId())) {
				throw new ExistException("participant_exist");
			}
		} else {
			actor = new Actor();
			actor.setEmail(inputs.getEmail());
			actorRepo.save(actor);
		}

		Participation participation = new Participation();
		participation.setEvent(eventRepo.findOneById(inputs.getEventId()));
		participation.setName(inputs.getName());
		participation.setParticipant(actor);
		repo.save(participation);

		return repo.findOneParticipationById(participation.getId());
	}

	@Override
	@Transactional
	public void remove(Long id) {
		repo.deleteById(id);
	}

}