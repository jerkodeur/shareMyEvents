package co.simplon.p25.sharemyeventapi.dtos;

import java.time.LocalDateTime;

public interface OrganizerEventListItem {
	Long getId();
	LocalDateTime getEventDate();
	String getTitle();
	int getNbParticipants();
}
