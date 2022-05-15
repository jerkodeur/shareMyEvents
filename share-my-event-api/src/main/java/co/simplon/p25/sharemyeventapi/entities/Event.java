package co.simplon.p25.sharemyeventapi.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "events")
public class Event extends AbstractEntity {

	@Column(name = "code")
	private String code;

	@Column(name = "title")
	private String title;

	@Column(name = "description")
	private String description;

	@Column(name = "event_date")
	private LocalDateTime eventDate;

	@ManyToOne
	@JoinColumn(name = "organizer_id")
	private Actor organizer;

	@ManyToOne(optional = true)
	@JoinColumn(name = "address_id")
	private Address address;

	// @ManyToMany
	// @JoinTable(name = "participations", joinColumns = @JoinColumn(name =
	// "event_id"), inverseJoinColumns = @JoinColumn(name = "actor_id"))
	// @MapKeyJoinColumn(name = "availability_id")
	// private List<Actor> participants = new ArrayList<>();

	public Event() {
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
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

	public void setEventDate(LocalDateTime eventDate) {
		this.eventDate = eventDate;
	}

	public Actor getOrganizer() {
		return organizer;
	}

	public void setOrganizer(Actor actor) {
		organizer = actor;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Event [code=" + code + ", title=" + title + ", description="
				+ description + ", eventDate=" + eventDate + ", organizer="
				+ organizer + ", address=" + address + "]";
	}

}
