package co.simplon.p25.sharemyeventsapi.services;

import java.util.List;

import javax.validation.Valid;

import co.simplon.p25.sharemyeventsapi.dtos.ParticipantCreateDto;
import co.simplon.p25.sharemyeventsapi.dtos.ParticipationDto;
import co.simplon.p25.sharemyeventsapi.dtos.updateAvailabilityDto;

public interface ParticipationService {

	List<ParticipationDto> getAll(Long eventId);
	ParticipationDto add(ParticipantCreateDto inputs);
	void remove(Long id);
	void updateAvailability(Long id, @Valid updateAvailabilityDto input);
}
