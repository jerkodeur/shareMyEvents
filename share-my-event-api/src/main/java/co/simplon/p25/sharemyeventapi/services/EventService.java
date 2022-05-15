package co.simplon.p25.sharemyeventapi.services;

import co.simplon.p25.sharemyeventapi.dtos.EventPageDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventAdressDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventCreateDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventDateDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventDescriptionDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventTitleDto;

public interface EventService {

	void create(EventCreateDto inputs);
	EventPageDto getEvent(Long inputs);
	EventTitleDto updateTitle(Long eventId, EventTitleDto input);
	EventDescriptionDto updateDescription(Long EventId,
			EventDescriptionDto input);
	EventDateDto updateDate(Long EventId, EventDateDto input);
	EventAdressDto updateAddress(Long EventId, EventAdressDto inputs);
}
