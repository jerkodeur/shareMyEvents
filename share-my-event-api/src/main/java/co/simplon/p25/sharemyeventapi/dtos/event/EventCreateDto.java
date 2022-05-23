package co.simplon.p25.sharemyeventapi.dtos.event;

import java.time.LocalDateTime;

import javax.validation.Valid;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

public class EventCreateDto {

	@NotBlank(message = "title_required")
	@Length(max = 50, message = "title_max_length")
	private String title;

	@NotEmpty(message = "description_required")
	private String description;

	@NotNull(message = "date_required")
	@DateTimeFormat
	@Future(message = "date_earlier")
	private LocalDateTime eventDate;

	@Valid
	private EventAddressDto address;

	private String organizerId;

	public EventCreateDto() {
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDateTime getEventDate() {
		return eventDate;
	}

	public void setEventDate(@DateTimeFormat LocalDateTime date) {
		eventDate = date;
	}

	public EventAddressDto getAddress() {
		return address;
	}

	public void setAddress(EventAddressDto address) {
		this.address = address;
	}

	public String getOrganizerId() {
		return organizerId;
	}

	public void setOrganizerId(String organizerId) {
		this.organizerId = organizerId;
	}

	@Override
	public String toString() {
		return "EventCreateDto [title=" + title + ", description=" + description
				+ ", eventDate=" + eventDate + ", address=" + address
				+ ", organizerId=" + organizerId + "]";
	}

}
