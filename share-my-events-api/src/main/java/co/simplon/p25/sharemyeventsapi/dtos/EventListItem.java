package co.simplon.p25.sharemyeventsapi.dtos;

import java.time.LocalDateTime;

public interface EventListItem {

	Long getId();
	LocalDateTime getEventDate();
	String getTitle();
	String getOrganizer();
	int getNbParticipants();
}
