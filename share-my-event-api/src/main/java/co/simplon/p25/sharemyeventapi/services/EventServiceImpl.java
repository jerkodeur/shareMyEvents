package co.simplon.p25.sharemyeventapi.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.simplon.p25.sharemyeventapi.dtos.EventPageDto;
import co.simplon.p25.sharemyeventapi.dtos.event.EventCreateDto;
import co.simplon.p25.sharemyeventapi.entities.Actor;
import co.simplon.p25.sharemyeventapi.entities.Address;
import co.simplon.p25.sharemyeventapi.entities.Event;
import co.simplon.p25.sharemyeventapi.helpers.RandomCode;
import co.simplon.p25.sharemyeventapi.repositories.AddressRepo;
import co.simplon.p25.sharemyeventapi.repositories.EventRepository;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	AuthService authService;

	@Autowired
	ActorService actorService;

	@Autowired
	EventRepository eventRepo;

	@Autowired
	AddressRepo addressRepo;

	private EventServiceImpl() {
		// Ensures non-instantiability
	}

	@Override
	@Transactional
	public void create(EventCreateDto inputs) {
		String code = RandomCode.getCode(8);
		Actor actor = actorService.actorByAuthId();

		Event event = new Event();
		event.setTitle(inputs.getTitle());
		event.setDescription(inputs.getDescription());
		event.setEventDate(inputs.getEventDate());
		event.setCode(code);
		event.setOrganizer(actor);

		if (inputs.getStreet() != null || inputs.getZipCode() != null
				|| inputs.getLocality() != null
				|| inputs.getAdditional() != null) {
			Address address = new Address();
			address.setStreet(inputs.getStreet());
			address.setZipCode(inputs.getZipCode());
			address.setLocality(inputs.getLocality());
			address.setAdditional(inputs.getAdditional());
			addressRepo.save(address);
			event.setAddress(address);
			// System.out.println(address);
		}

		eventRepo.save(event);
		// System.out.println(event);

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
		if (event.getAddress() != null) {
			eventPage.setStreet(event.getAddress().getStreet());
			eventPage.setZipCode(event.getAddress().getZipCode());
			eventPage.setLocality(event.getAddress().getLocality());
			eventPage.setAdditional(event.getAddress().getAdditional());
		}
		eventPage.setOrganizerAuthId(event.getOrganizer().getAuthId());
		eventPage.setOrganizerFirstname(event.getOrganizer().getFirstname());
		eventPage.setOrganizerLastname(event.getOrganizer().getLastname());
		eventPage.setOrganizerEmail(event.getOrganizer().getEmail());

		System.out.println(eventPage);
		return eventPage;
	}

}
