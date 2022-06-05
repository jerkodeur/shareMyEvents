package co.simplon.p25.sharemyeventsapi.services;

import co.simplon.p25.sharemyeventsapi.dtos.AuthorizedEventAccessDto;
import co.simplon.p25.sharemyeventsapi.dtos.ParticipantAccessDto;
import co.simplon.p25.sharemyeventsapi.dtos.event.EventAddressDto;
import co.simplon.p25.sharemyeventsapi.dtos.event.EventCreateDto;
import co.simplon.p25.sharemyeventsapi.dtos.event.EventCreatedId;
import co.simplon.p25.sharemyeventsapi.dtos.event.EventDateDto;
import co.simplon.p25.sharemyeventsapi.dtos.event.EventDescriptionDto;
import co.simplon.p25.sharemyeventsapi.dtos.event.EventPageDto;
import co.simplon.p25.sharemyeventsapi.dtos.event.EventTitleDto;

public interface EventService {

	EventCreatedId create(EventCreateDto inputs);
	EventPageDto getEvent(Long inputs);
	EventTitleDto updateTitle(Long eventId, EventTitleDto input);
	EventDescriptionDto updateDescription(Long EventId,
			EventDescriptionDto input);
	EventDateDto updateDate(Long eventId, EventDateDto input);
	EventAddressDto updateAddress(Long eventId, EventAddressDto inputs);
	boolean isOrganizer(Long eventId);
	void remove(Long eventId);
	AuthorizedEventAccessDto access(ParticipantAccessDto inputs);
}
