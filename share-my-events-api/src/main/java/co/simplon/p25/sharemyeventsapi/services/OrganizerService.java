package co.simplon.p25.sharemyeventsapi.services;

import java.util.List;

import co.simplon.p25.sharemyeventsapi.dtos.NextEventHomeDto;
import co.simplon.p25.sharemyeventsapi.dtos.OrganizerEventListItem;

public interface OrganizerService {

	NextEventHomeDto nextEvent();
	List<OrganizerEventListItem> getNextEvents();
}
