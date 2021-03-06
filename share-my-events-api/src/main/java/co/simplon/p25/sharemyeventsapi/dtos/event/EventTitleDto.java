package co.simplon.p25.sharemyeventsapi.dtos.event;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

public final class EventTitleDto {

	@NotBlank(message = "title_required")
	@Length(max = 50, message = "title_max_length")
	private String title;

	EventTitleDto() {
		// TODO Auto-generated constructor stub
	}

	public EventTitleDto(String title) {
		this.title = title;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Override
	public String toString() {
		return "EventTitleDto [title=" + title + "]";
	}

}
