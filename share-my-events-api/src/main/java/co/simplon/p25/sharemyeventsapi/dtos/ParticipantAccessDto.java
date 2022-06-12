package co.simplon.p25.sharemyeventsapi.dtos;

import javax.validation.constraints.NotNull;

public class ParticipantAccessDto {

	@NotNull(message = ("eventCode_required"))
	private String eventCode;

	private String email;

	ParticipantAccessDto() {
	}

	public String getEventCode() {
		return eventCode;
	}
	public void setEventCode(String eventCode) {
		this.eventCode = eventCode;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "ParticipantAccessDto [eventCode=" + eventCode + ", email="
				+ email + "]";
	}

}
