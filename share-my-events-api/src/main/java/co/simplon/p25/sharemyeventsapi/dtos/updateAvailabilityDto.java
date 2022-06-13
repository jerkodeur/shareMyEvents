package co.simplon.p25.sharemyeventsapi.dtos;

import javax.validation.constraints.NotNull;

public class updateAvailabilityDto {

	@NotNull
	private Long eventId;

	@NotNull
	private String availability;

	public updateAvailabilityDto(Long eventId, String availability) {
		this.eventId = eventId;
		this.availability = availability;
	}

	public Long getEventId() {
		return eventId;
	}
	public void setEventId(Long eventId) {
		this.eventId = eventId;
	}
	public String getAvailability() {
		return availability;
	}
	public void setAvailability(String availability) {
		this.availability = availability;
	}

	@Override
	public String toString() {
		return "updateAvailabilityDto [eventId=" + eventId + ", availability="
				+ availability + "]";
	}

}
