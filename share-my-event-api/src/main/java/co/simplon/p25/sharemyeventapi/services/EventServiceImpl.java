package co.simplon.p25.sharemyeventapi.services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import co.simplon.p25.sharemyeventapi.dtos.event.EventAddressDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventCreateDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventCreatedId;
import co.simplon.p25.sharemyeventapi.dtos.event.EventDateDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventDescriptionDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventPageDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventTitleDto;
import co.simplon.p25.sharemyeventapi.entities.Actor;
import co.simplon.p25.sharemyeventapi.entities.Address;
import co.simplon.p25.sharemyeventapi.entities.Event;
import co.simplon.p25.sharemyeventapi.exceptions.ForbiddenException;
import co.simplon.p25.sharemyeventapi.helpers.RandomCode;
import co.simplon.p25.sharemyeventapi.repositories.AddressRepository;
import co.simplon.p25.sharemyeventapi.repositories.EventRepository;

@Service
public class EventServiceImpl implements EventService {

	private final AuthService authService;
	private final ActorService actorService;
	private final EventRepository eventRepo;
	private final AddressRepository addressRepo;

	public EventServiceImpl(AuthService authService, ActorService actorService,
			EventRepository eventRepo, AddressRepository addressRepo,
			OrganizerService organizerService) {
		this.authService = authService;
		this.actorService = actorService;
		this.eventRepo = eventRepo;
		this.addressRepo = addressRepo;
	}

	@Override
	@Transactional
	public EventCreatedId create(EventCreateDto inputs) {
		String code = RandomCode.getCode(8);
		Actor actor = actorService.actorByAuthId();

		Event event = new Event();
		event.setTitle(inputs.getTitle());
		event.setDescription(inputs.getDescription());
		event.setEventDate(inputs.getEventDate());
		event.setCode(code);
		event.setOrganizer(actor);

		if (inputs.getAddress().getStreet() != null
				|| inputs.getAddress().getZipCode() != null
				|| inputs.getAddress().getLocality() != null
				|| inputs.getAddress().getAdditional() != null) {
			Address address = new Address();
			address.setStreet(inputs.getAddress().getStreet());
			address.setZipCode(inputs.getAddress().getZipCode());
			address.setLocality(inputs.getAddress().getLocality());
			address.setAdditional(inputs.getAddress().getAdditional());

			event.setAddress(address);
		}

		eventRepo.save(event);

		EventCreatedId eventId = new EventCreatedId(event.getId());
		return eventId;

	}

	@Override
	public EventPageDto getEvent(Long eventId) {
		Event event = eventRepo.findOneById(eventId);

		EventPageDto eventPage = new EventPageDto();
		eventPage.setId(event.getId());
		eventPage.setCode(event.getCode());
		eventPage.setTitle(event.getTitle());
		eventPage.setDescription(event.getDescription());
		eventPage.setEventDate(event.getEventDate());
		if (event.getAddress() != null
				&& (event.getAddress().getStreet() != null
						|| event.getAddress().getZipCode() != null
						|| event.getAddress().getLocality() != null
						|| event.getAddress().getAdditional() != null)) {
			eventPage.setAddress(event.getAddress());
		}
		eventPage.setOrganizerAuthId(event.getOrganizer().getAuthId());
		eventPage.setOrganizerFirstname(event.getOrganizer().getNickname());
		eventPage.setOrganizerEmail(event.getOrganizer().getEmail());

		return eventPage;
	}

	@Override
	@Transactional
	public EventTitleDto updateTitle(Long eventId, EventTitleDto input)
			throws ForbiddenException {
		if (!isOrganizer(eventId)) {
			throw new ForbiddenException("Forbidden access to the resource");
		}
		Event event = eventRepo.findOneById(eventId);
		event.setTitle(input.getTitle());
		eventRepo.save(event);
		return input;
	}

	@Override
	@Transactional
	public EventDescriptionDto updateDescription(Long eventId,
			EventDescriptionDto input) throws ForbiddenException {
		if (!isOrganizer(eventId)) {
			throw new ForbiddenException("Forbidden access to the resource");
		}
		Event event = eventRepo.findOneById(eventId);
		event.setDescription(input.getDescription());
		eventRepo.save(event);
		return input;
	}

	@Override
	@Transactional
	public EventDateDto updateDate(Long eventId, EventDateDto input)
			throws ForbiddenException {
		if (!isOrganizer(eventId)) {
			throw new ForbiddenException("Forbidden access to the resource");
		}
		Event event = eventRepo.findOneById(eventId);
		event.setEventDate(input.getEventDate());
		eventRepo.save(event);
		return input;
	}

	@Override
	@Transactional
	public EventAddressDto updateAddress(Long eventId, EventAddressDto inputs)
			throws ForbiddenException {
		if (!isOrganizer(eventId)) {
			throw new ForbiddenException("Forbidden access to the resource");
		}
		Address address;
		Event event = eventRepo.findOneById(eventId);

		if (event.getAddress() != null)
			address = event.getAddress();
		else
			address = new Address();

		if (inputs.getStreet() != null || inputs.getZipCode() != null
				|| inputs.getLocality() != null
				|| inputs.getAdditional() != null) {
			address.setStreet(inputs.getStreet());
			address.setZipCode(inputs.getZipCode());
			address.setLocality(inputs.getLocality());
			address.setAdditional(inputs.getAdditional());

			addressRepo.save(address);
			event.setAddress(address);
		} else {
			addressRepo.delete(address);
			event.setAddress(null);
		}

		eventRepo.save(event);
		return inputs;
	}

	@Override
	@Transactional
	public void remove(Long eventId) throws ForbiddenException {
		if (!isOrganizer(eventId)) {
			throw new ForbiddenException("Forbidden access to the resource");
		}
		eventRepo.deleteById(eventId);
	}

	@Override
	public boolean isOrganizer(Long eventId) {
		return authService.findActorIdByAuthId() == eventRepo
				.findOrganizerByEventId(eventId).getId();
	}

}
