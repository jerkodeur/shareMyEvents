package co.simplon.p25.sharemyeventapi.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.p25.sharemyeventapi.dtos.ParticipantCreateDto;
import co.simplon.p25.sharemyeventapi.dtos.ParticipationDto;
import co.simplon.p25.sharemyeventapi.services.ParticipationService;

@RestController
@RequestMapping("/participations")
public class ParticipationController {

	private final ParticipationService participationService;

	private ParticipationController(ParticipationService participationService) {
		this.participationService = participationService;
	}

	@GetMapping("/{eventId}")
	public List<ParticipationDto> list(
			@PathVariable(value = "eventId") Long eventId) {
		return participationService.getAll(eventId);
	}

	@PostMapping("/new")
	@ResponseStatus(code = HttpStatus.CREATED)
	public ParticipationDto add(
			@Valid @RequestBody ParticipantCreateDto inputs) {
		return participationService.add(inputs);
	}

	@DeleteMapping("/delete/{participationId}")
	public void delete(@PathVariable(value = "participationId") Long id) {
		participationService.remove(id);
	}
}
