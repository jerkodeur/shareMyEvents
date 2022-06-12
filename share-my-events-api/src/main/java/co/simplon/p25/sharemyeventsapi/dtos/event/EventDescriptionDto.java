package co.simplon.p25.sharemyeventsapi.dtos.event;

import javax.validation.constraints.NotEmpty;

public final class EventDescriptionDto {

	@NotEmpty(message = "description_required")
	private String description;

	public EventDescriptionDto() {
		// TODO Auto-generated constructor stub
	}

	public EventDescriptionDto(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "EventDescription [description=" + description + "]";
	}
}
