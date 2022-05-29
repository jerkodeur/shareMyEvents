package co.simplon.p25.sharemyeventapi.services;

import org.springframework.stereotype.Service;

import co.simplon.p25.sharemyeventapi.dtos.NextEventHomeDto;
import co.simplon.p25.sharemyeventapi.entities.Event;
import co.simplon.p25.sharemyeventapi.repositories.EventRepository;
import co.simplon.p25.sharemyeventapi.repositories.ParticipationRepository;

@Service
public class OrganizerServiceImpl implements OrganizerService {

	private final EventRepository eventRepo;
	private final ParticipationRepository participationRepo;
	private final AuthService authService;

	private OrganizerServiceImpl(EventRepository eventRepo,
			ParticipationRepository participationRepo,
			AuthService authService) {
		this.eventRepo = eventRepo;
		this.participationRepo = participationRepo;
		this.authService = authService;
	}

	@Override
	public NextEventHomeDto nextEvent() {
		Event nextEvent = eventRepo
				.findNextEventByOrganizerId(authService.findActorIdByAuthId());
		NextEventHomeDto nextEventDto = new NextEventHomeDto();
		nextEventDto.setEventDate(nextEvent.getEventDate());
		nextEventDto.setTitle(nextEvent.getTitle());
		nextEventDto.setId(nextEvent.getId());
		int nbParticipants = participationRepo
				.countByEventId(nextEvent.getId());
		nextEventDto.setNbParticipants(nbParticipants);
		return nextEventDto;
	}

}
