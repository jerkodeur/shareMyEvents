package co.simplon.p25.sharemyeventapi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.p25.sharemyeventapi.dtos.NextEventHomeDto;
import co.simplon.p25.sharemyeventapi.dtos.OrganizerEventListItem;
import co.simplon.p25.sharemyeventapi.services.OrganizerService;

@RestController
@RequestMapping("/organizer")
public class OrganizerController {

	@Autowired
	OrganizerService organizerService;

	private OrganizerController() {
		// Ensures non-instantiability
	}

	@GetMapping("/next-event")
	public NextEventHomeDto getNextEvent() {
		return organizerService.nextEvent();
	}

	@GetMapping("/events")
	public List<OrganizerEventListItem> getNextEvents() {
		return organizerService.getNextEvents();
	}
}
