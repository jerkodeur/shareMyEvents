package co.simplon.p25.sharemyeventsapi.services;

import java.util.List;

import org.springframework.stereotype.Service;

import co.simplon.p25.sharemyeventsapi.dtos.NextEventHomeDto;
import co.simplon.p25.sharemyeventsapi.dtos.OrganizerEventListItem;
import co.simplon.p25.sharemyeventsapi.repositories.EventRepository;
import co.simplon.p25.sharemyeventsapi.repositories.ParticipationRepository;

@Service
public class OrganizerServiceImpl implements OrganizerService {

	private final EventRepository eventRepo;
	private final AuthService authService;

	private OrganizerServiceImpl(EventRepository eventRepo,
			ParticipationRepository participationRepo,
			AuthService authService) {
		this.eventRepo = eventRepo;
		this.authService = authService;
	}

	@Override
	public NextEventHomeDto nextEvent() {
		return eventRepo
				.findNextEventByOrganizerId(authService.findActorIdByAuthId());
	}

	@Override
	public List<OrganizerEventListItem> getNextEvents() {
		return eventRepo.findOrganizerEventsByOrganizerId(
				authService.findActorIdByAuthId());
	}

}
