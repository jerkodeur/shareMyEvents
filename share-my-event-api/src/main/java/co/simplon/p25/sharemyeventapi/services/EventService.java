package co.simplon.p25.sharemyeventapi.services;

import co.simplon.p25.sharemyeventapi.dtos.EventPageDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventCreateDto;

public interface EventService {

	void create(EventCreateDto inputs);
	EventPageDto getEvent(Long eventId);
}
