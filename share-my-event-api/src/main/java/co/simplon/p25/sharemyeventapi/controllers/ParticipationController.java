package co.simplon.p25.sharemyeventapi.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.p25.sharemyeventapi.dtos.ParticipantCreateDto;
import co.simplon.p25.sharemyeventapi.entities.Participation;
import co.simplon.p25.sharemyeventapi.services.ParticipationService;

@RestController
@RequestMapping("/participations")
public class ParticipationController {

	private final ParticipationService participationService;

	private ParticipationController(ParticipationService participationService) {
		this.participationService = participationService;
	}

	@GetMapping("/{id}")
	public List<Participation> list(@PathVariable(value = "id") Long eventId) {
		return participationService.getAll(eventId);
	}

	@PostMapping("/new")
	public void add(@Valid @RequestBody ParticipantCreateDto inputs) {
		participationService.add(inputs);
	}

	@DeleteMapping("/delete/event/{eventId}/participant/{participantEmail}")
	public void delete(@PathVariable(value = "eventId") Long eventId,
			@PathVariable(value = "participantEmail") String participantEmail) {
		participationService.remove(eventId, participantEmail);
	}
}
