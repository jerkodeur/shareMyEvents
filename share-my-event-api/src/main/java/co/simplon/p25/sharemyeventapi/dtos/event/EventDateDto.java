package co.simplon.p25.sharemyeventapi.dtos.event;

import java.time.LocalDateTime;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

public final class EventDateDto {

	@NotNull(message = "date_required")
	@DateTimeFormat
	@Future
	private LocalDateTime eventDate;

	public EventDateDto() {
	}

	public EventDateDto(LocalDateTime eventDate) {
		this.eventDate = eventDate;
	}

	public LocalDateTime getEventDate() {
		return eventDate;
	}

	public void setEventDate(LocalDateTime eventDate) {
		this.eventDate = eventDate;
	}

	@Override
	public String toString() {
		return "EventDateDto [eventDate=" + eventDate + "]";
	}
}
