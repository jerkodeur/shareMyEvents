package co.simplon.p25.sharemyeventsapi.controllers;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.p25.sharemyeventsapi.dtos.AuthorizedEventAccessDto;
import co.simplon.p25.sharemyeventsapi.dtos.ParticipantAccessDto;
import co.simplon.p25.sharemyeventsapi.dtos.event.EventAddressDto;
import co.simplon.p25.sharemyeventsapi.dtos.event.EventCreateDto;
import co.simplon.p25.sharemyeventsapi.dtos.event.EventCreatedId;
import co.simplon.p25.sharemyeventsapi.dtos.event.EventDateDto;
import co.simplon.p25.sharemyeventsapi.dtos.event.EventDescriptionDto;
import co.simplon.p25.sharemyeventsapi.dtos.event.EventPageDto;
import co.simplon.p25.sharemyeventsapi.dtos.event.EventTitleDto;
import co.simplon.p25.sharemyeventsapi.services.EventService;

@RestController
@RequestMapping("/events")
public class EventController {

	private final EventService eventService;

	private EventController(EventService eventService) {
		this.eventService = eventService;
	}

	@PostMapping("/new")
	@ResponseStatus(HttpStatus.CREATED)
	public EventCreatedId Create(@Valid @RequestBody EventCreateDto inputs) {
		return eventService.create(inputs);
	}

	@GetMapping("/{id}")
	public EventPageDto getEvent(@PathVariable(value = "id") Long eventId) {
		return eventService.getEvent(eventId);
	}

	@PostMapping("/participant-access")
	@ResponseStatus(HttpStatus.OK)
	public AuthorizedEventAccessDto Create(@Valid @RequestBody ParticipantAccessDto inputs) {
		return eventService.access(inputs);
	}

	@PatchMapping("/update/{id}/title")
	public EventTitleDto updateTitle(@PathVariable(value = "id") Long eventId,
			@Valid @RequestBody EventTitleDto input) {
		return eventService.updateTitle(eventId, input);
	}

	@PatchMapping("/update/{id}/description")
	public EventDescriptionDto updateDescription(
			@PathVariable(value = "id") Long eventId,
			@Valid @RequestBody EventDescriptionDto input) {
		return eventService.updateDescription(eventId, input);
	}

	@PatchMapping("/update/{id}/date")
	public EventDateDto updateDate(@PathVariable(value = "id") Long eventId,
			@Valid @RequestBody EventDateDto input) {
		return eventService.updateDate(eventId, input);
	}

	@PatchMapping("/update/{id}/address")
	public EventAddressDto updateAddress(
			@PathVariable(value = "id") Long eventId,
			@Valid @RequestBody EventAddressDto input) {
		return eventService.updateAddress(eventId, input);
	}

	@DeleteMapping("/{id}")
	public void removeEvent(@PathVariable(value = "id") Long eventId) {
		eventService.remove(eventId);
	}
}
