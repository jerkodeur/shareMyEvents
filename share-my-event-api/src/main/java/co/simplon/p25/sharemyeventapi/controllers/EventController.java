package co.simplon.p25.sharemyeventapi.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.p25.sharemyeventapi.dtos.EventPageDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventCreateDto;
import co.simplon.p25.sharemyeventapi.services.EventService;

@RestController
@RequestMapping("/events")
public class EventController {

	@Autowired
	private EventService eventService;

	private EventController() {
		// Ensures non-instantiability
	}

	@PostMapping("/new")
	@ResponseStatus(HttpStatus.CREATED)
	public void Create(@Valid @RequestBody EventCreateDto inputs) {
		eventService.create(inputs);
	}

	@GetMapping("/{id}")
	public EventPageDto getEvent(@PathVariable(value = "id") Long eventId) {
		return eventService.getEvent(eventId);
	}

}
