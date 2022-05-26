package co.simplon.p25.sharemyeventapi.services;

import java.util.List;

import co.simplon.p25.sharemyeventapi.dtos.ParticipantCreateDto;
import co.simplon.p25.sharemyeventapi.dtos.ParticipationDto;

public interface ParticipationService {

	List<ParticipationDto> getAll(Long eventId);
	ParticipationDto add(ParticipantCreateDto inputs);
	void remove(Long id);
}
