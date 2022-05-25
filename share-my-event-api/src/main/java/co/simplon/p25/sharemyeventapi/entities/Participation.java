package co.simplon.p25.sharemyeventapi.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "participations")
public class Participation extends AbstractEntity {

	@Column(name = "name")
	private String name;

	@Column(name = "participant_id")
	private Long participantId;

	@Column(name = "event_id")
	private Long eventId;

	@Column(name = "availability_id")
	private Long availabilityId;

	public Participation(String name, Long participant_id, Long event_id,
			Long availability_id) {
		this.name = name;
		participantId = participant_id;
		eventId = event_id;
		availabilityId = availability_id;
	}

	public Participation() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getParticipantId() {
		return participantId;
	}

	public void setParticipantId(Long participant_id) {
		participantId = participant_id;
	}

	public Long getEventId() {
		return eventId;
	}

	public void setEventId(Long event_id) {
		eventId = event_id;
	}

	public Long getAvailabilityId() {
		return availabilityId;
	}

	public void setAvailabilityId(Long availability_id) {
		availabilityId = availability_id;
	}

	@Override
	public String toString() {
		return "Participation [name=" + name + ", participant_id="
				+ participantId + ", event_id=" + eventId + ", availability_id="
				+ availabilityId + "]";
	}

}
