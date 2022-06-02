package co.simplon.p25.sharemyeventapi.services;

import co.simplon.p25.sharemyeventapi.dtos.ParticipantAccessDto;
import co.simplon.p25.sharemyeventapi.dtos.AuthorizedEventAccessDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventAddressDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventCreateDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventCreatedId;
import co.simplon.p25.sharemyeventapi.dtos.event.EventDateDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventDescriptionDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventPageDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventTitleDto;

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
