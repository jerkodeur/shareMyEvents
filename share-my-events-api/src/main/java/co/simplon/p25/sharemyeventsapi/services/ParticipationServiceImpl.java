package co.simplon.p25.sharemyeventsapi.services;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import co.simplon.p25.sharemyeventsapi.dtos.MailDto;
import co.simplon.p25.sharemyeventsapi.dtos.ParticipantCreateDto;
import co.simplon.p25.sharemyeventsapi.dtos.ParticipationDto;
import co.simplon.p25.sharemyeventsapi.dtos.updateAvailabilityDto;
import co.simplon.p25.sharemyeventsapi.entities.Actor;
import co.simplon.p25.sharemyeventsapi.entities.Availability;
import co.simplon.p25.sharemyeventsapi.entities.Event;
import co.simplon.p25.sharemyeventsapi.entities.Participation;
import co.simplon.p25.sharemyeventsapi.exceptions.ResourceNotFoundException;
import co.simplon.p25.sharemyeventsapi.repositories.ActorRepository;
import co.simplon.p25.sharemyeventsapi.repositories.AvailabilityRepository;
import co.simplon.p25.sharemyeventsapi.repositories.EventRepository;
import co.simplon.p25.sharemyeventsapi.repositories.ParticipationRepository;

@Service
public class ParticipationServiceImpl implements ParticipationService {

	@Value("${sharemyevents.readresolve.email}")
	private String smeMail;

	@Value("${sharemyevents.front.url}")
	private String frontUrl;

	private final ParticipationRepository repo;
	private final ActorRepository actorRepo;
	private final AvailabilityRepository availabilityRepo;
	private final EventRepository eventRepo;
	private final RestTemplate herald;

	public ParticipationServiceImpl(ParticipationRepository repo,
			ActorRepository actorRepo, EventRepository eventRepo,
			AvailabilityRepository availabilityRepo,
			RestTemplate heraldRestTemplate) {
		this.repo = repo;
		this.actorRepo = actorRepo;
		this.availabilityRepo = availabilityRepo;
		this.eventRepo = eventRepo;
		herald = heraldRestTemplate;
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

		if (actorRepo.existsByEmail(inputs.getEmail())) {
			actor = actorRepo.searchByEmail(inputs.getEmail());
		} else {
			actor = new Actor();
			actor.setEmail(inputs.getEmail());
			actorRepo.save(actor);
		}

		Participation participation = new Participation();
		Event event = eventRepo.findOneById(inputs.getEventId());
		String organiser = eventRepo.findOrganizerByEventId(event.getId())
				.getNickname();

		participation.setEvent(event);
		participation.setName(inputs.getName());
		participation.setParticipant(actor);
		repo.save(participation);

		MailDto mail = new MailDto();
		mail.setReplyTo(smeMail);
		mail.setFrom(smeMail);
		mail.setTo(smeMail);
		mail.setSubject("Vous avez été convié à participer à un évènement!");
		mail.setContent(String.format("<p>Bonjour,</p>"
				+ "<p>%s vous a convié à participer à son évènement:</p>"
				+ "<p><strong>%s</strong></p>"
				+ "<p>Rendez-vous sur <a href='%s/home' target='_blank'>shareMyevents</a> "
				+ "muni du code <strong>%s</strong> et venez informer votre disponibilité, "
				+ "%s attends avec impatience une réponse à son invitation et sera ravi de vous compter parmi ses invités</p> "
				+ "<p>A très vite sur shareMyEvents, l'appli qui vous permet de créer un event plus rapidement que les vents</p> ",
				organiser, event.getTitle(), frontUrl, event.getCode(),
				organiser));
		herald.postForLocation("/mails", mail);

		return repo.findOneParticipationById(participation.getId());
	}

	@Override
	@Transactional
	public void remove(Long id) {
		repo.deleteById(id);
	}

	@Override
	public void updateAvailability(Long participantId,
			@Valid updateAvailabilityDto input) {
		Actor participant = actorRepo.findOneById(participantId);
		Event event = eventRepo.findOneById(input.getEventId());
		Availability availability = availabilityRepo
				.findOneByLabel(input.getAvailability())
				.orElseThrow(() -> new ResourceNotFoundException(
						String.format("unknown_availability")));

		Participation participation = repo
				.findByParticipantAndEvent(participant, event)
				.orElseThrow(() -> new ResourceNotFoundException(
						String.format("unknown_participation")));

		participation.setAvailability(availability);
		repo.save(participation);
	}

}
