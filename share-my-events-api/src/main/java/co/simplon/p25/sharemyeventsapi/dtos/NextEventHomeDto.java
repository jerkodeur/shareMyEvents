package co.simplon.p25.sharemyeventsapi.dtos;

import java.time.LocalDateTime;

public interface NextEventHomeDto {

	Long getId();
	String getTitle();
	LocalDateTime getEventDate();
	int getNbParticipants();

}
