package co.simplon.p25.sharemyeventapi.services;

import java.util.List;

import co.simplon.p25.sharemyeventapi.dtos.NextEventHomeDto;
import co.simplon.p25.sharemyeventapi.dtos.OrganizerEventListItem;

public interface OrganizerService {

	NextEventHomeDto nextEvent();
	List<OrganizerEventListItem> getNextEvents();
}
