package co.simplon.p25.sharemyeventapi.dtos;

import java.time.LocalDateTime;

public interface NextEventHomeDto {

	Long getId();
	String getTitle();
	LocalDateTime getEventDate();
	int getNbParticipants();

}
