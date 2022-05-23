package co.simplon.p25.sharemyeventapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.p25.sharemyeventapi.dtos.NextEventHomeDto;
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
}
