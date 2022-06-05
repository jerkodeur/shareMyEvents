package co.simplon.p25.sharemyeventsapi.services;

import java.util.List;

import co.simplon.p25.sharemyeventsapi.dtos.ParticipantCreateDto;
import co.simplon.p25.sharemyeventsapi.dtos.ParticipationDto;

public interface ParticipationService {

	List<ParticipationDto> getAll(Long eventId);
	ParticipationDto add(ParticipantCreateDto inputs);
	void remove(Long id);
}
