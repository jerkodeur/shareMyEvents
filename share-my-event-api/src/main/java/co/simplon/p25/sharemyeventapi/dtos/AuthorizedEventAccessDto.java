package co.simplon.p25.sharemyeventapi.dtos;

public class AuthorizedEventAccessDto {
	private Long participantId;
	private Long eventId;

	public AuthorizedEventAccessDto(Long participantId, Long eventId) {
		this.participantId = participantId;
		this.eventId = eventId;
	}

	public Long getParticipantId() {
		return participantId;
	}

	public void setParticipantId(Long participantId) {
		this.participantId = participantId;
	}

	public Long getEventId() {
		return eventId;
	}

	public void setEventId(Long eventId) {
		this.eventId = eventId;
	}

	@Override
	public String toString() {
		return "AuthorizedEventAccessDto [participantId=" + participantId
				+ ", eventId=" + eventId + "]";
	}

}
