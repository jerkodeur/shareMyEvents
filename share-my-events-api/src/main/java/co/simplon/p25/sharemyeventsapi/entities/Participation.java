package co.simplon.p25.sharemyeventsapi.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "participations")
public class Participation extends AbstractEntity {

	@Column(name = "name")
	private String name;

	@ManyToOne
	@JoinColumn(name = "participant_id")
	private Actor participant;

	@ManyToOne
	@JoinColumn(name = "event_id")
	private Event event;

	@ManyToOne
	@JoinColumn(name = "availability_id")
	private Availability availability;

	public Participation() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Actor getParticipant() {
		return participant;
	}

	public void setParticipant(Actor participant) {
		this.participant = participant;
	}

	public Event getEvent() {
		return event;
	}

	public void setEvent(Event event) {
		this.event = event;
	}

	public Availability getAvailability() {
		return availability;
	}

	public void setAvailability(Availability availability) {
		this.availability = availability;
	}

	@Override
	public String toString() {
		return "Participation [name=" + name + ", email="
				+ participant.getEmail() + ", eventId=" + event.getId()
				+ ", availability=" + availability.getLabel() + "]";
	}

}
