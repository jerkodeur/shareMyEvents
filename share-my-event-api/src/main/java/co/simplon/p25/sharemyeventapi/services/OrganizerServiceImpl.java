package co.simplon.p25.sharemyeventapi.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.simplon.p25.sharemyeventapi.dtos.NextEventHomeDto;
import co.simplon.p25.sharemyeventapi.repositories.EventRepository;

@Service
public class OrganizerServiceImpl implements OrganizerService {

	@Autowired
	EventRepository eventRepo;

	@Autowired
	AuthService authService;

	@Override
	public NextEventHomeDto nextEvent() {
		NextEventHomeDto nextEvent = eventRepo
				.findNextEventByOrganizerIdLimitTo(
						authService.findActorIdByAuthId(), 1);
		return nextEvent;
	}

}
