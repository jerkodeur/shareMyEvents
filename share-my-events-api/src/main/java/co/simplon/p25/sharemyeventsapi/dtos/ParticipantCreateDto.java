package co.simplon.p25.sharemyeventsapi.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import co.simplon.p25.sharemyeventsapi.validators.UniqueParticipant;
import co.simplon.p25.sharemyeventsapi.validators.UniqueParticipantName;

@UniqueParticipant(message = "participant_exist_on_event")
@UniqueParticipantName(message = "name_exist_on_event")
public class ParticipantCreateDto {

	@NotBlank(message = "name_required")
	@Length(min = 2, message = "name_length")
	private String name;

	@NotNull(message = "eventId_required")
	private Long eventId;

	@NotBlank(message = "email_required")
	@Pattern(regexp = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", message = "email_format")
	private String email;

	public ParticipantCreateDto() {
		//
	}

	public ParticipantCreateDto(String name, Long eventId, String email) {
		this.name = name;
		this.eventId = eventId;
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getEventId() {
		return eventId;
	}
	public void setEventId(Long eventId) {
		this.eventId = eventId;
	}

	@Override
	public String toString() {
		return "ParticipantCreateDto [name=" + name + ", eventId=" + eventId
				+ ", email=" + email + "]";
	}

}
