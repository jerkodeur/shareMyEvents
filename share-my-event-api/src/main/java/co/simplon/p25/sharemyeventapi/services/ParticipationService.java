package co.simplon.p25.sharemyeventapi.services;

import java.util.List;

import co.simplon.p25.sharemyeventapi.dtos.ParticipantCreateDto;
import co.simplon.p25.sharemyeventapi.entities.Participation;

public interface ParticipationService {

	List<Participation> getAll(Long eventId);
	void add(ParticipantCreateDto inputs);
	void remove(Long eventId, String participantEmail);
}
