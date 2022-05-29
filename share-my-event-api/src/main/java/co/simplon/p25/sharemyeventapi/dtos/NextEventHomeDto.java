package co.simplon.p25.sharemyeventapi.dtos;

import java.time.LocalDateTime;

public class NextEventHomeDto {

	Long id;
	String title;
	LocalDateTime eventDate;
	int nbParticipants;

	public NextEventHomeDto() {
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public LocalDateTime getEventDate() {
		return eventDate;
	}

	public void setEventDate(LocalDateTime localDateTime) {
		eventDate = localDateTime;
	}

	public int getNbParticipants() {
		return nbParticipants;
	}

	public void setNbParticipants(int nbParticipants) {
		this.nbParticipants = nbParticipants;
	}

	@Override
	public String toString() {
		return "NextEventHomeDto [id=" + id + ", title=" + title
				+ ", eventDate=" + eventDate + ", nbParticipants="
				+ nbParticipants + "]";
	}

}
