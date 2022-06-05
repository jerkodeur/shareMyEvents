package co.simplon.p25.sharemyeventsapi.dtos.event;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import co.simplon.p25.sharemyeventsapi.entities.Address;

public class EventPageDto {
	private Long id;
	private String code;
	private String title;
	private String description;
	private LocalDateTime eventDate;
	private UUID organizerAuthId;
	private Long organizerId;
	private String organizerFirstname;
	private String organizerLastname;
	private String organizerEmail;
	private Address address;
	private List<Long> participants;

	public EventPageDto() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Long getOrganizerId() {
		return organizerId;
	}

	public void setOrganizerId(Long organizerId) {
		this.organizerId = organizerId;
	}

	public UUID getOrganizerAuthId() {
		return organizerAuthId;
	}

	public void setOrganizerAuthId(UUID uuid) {
		organizerAuthId = uuid;
	}

	public String getOrganizerFirstname() {
		return organizerFirstname;
	}

	public void setOrganizerFirstname(String organizerFirstname) {
		this.organizerFirstname = organizerFirstname;
	}

	public String getOrganizerLastname() {
		return organizerLastname;
	}

	public void setOrganizerLastname(String organizerLastname) {
		this.organizerLastname = organizerLastname;
	}

	public String getOrganizerEmail() {
		return organizerEmail;
	}

	public void setOrganizerEmail(String organizerEmail) {
		this.organizerEmail = organizerEmail;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public List<Long> getParticipants() {
		return participants;
	}

	public void setParticipants(List<Long> participants) {
		this.participants = participants;
	}

	@Override
	public String toString() {
		return "EventPageDto [id=" + id + ", code=" + code + ", title=" + title
				+ ", description=" + description + ", eventDate=" + eventDate
				+ ", organizerAuthId=" + organizerAuthId
				+ ", organizerFirstname=" + organizerFirstname
				+ ", organizerLastname=" + organizerLastname
				+ ", organizerEmail=" + organizerEmail + ", address=" + address
				+ "]";
	}

}
