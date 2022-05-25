package co.simplon.p25.sharemyeventapi.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import co.simplon.p25.sharemyeventapi.validators.UniqueParticipantName;

public class ParticipantCreateDto {

	@UniqueParticipantName(message = "name_unique")
	@NotBlank(message = "name_required")
	@Length(min = 2, message = "name_length")
	private String name;

	@NotNull(message = "eventId_required")
	private Long eventId;

	@NotBlank(message = "email_required")
	@Pattern(regexp = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", message = "email_format")
	private String email;

	public ParticipantCreateDto() {
		// TODO Auto-generated constructor stub
	}

	public ParticipantCreateDto(
			@Length(min = 2, message = "name_length") String name,
			@NotNull(message = "eventId_required") Long eventId,
			@Pattern(regexp = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", message = "email_format") String email) {
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
