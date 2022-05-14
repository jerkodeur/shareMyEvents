package co.simplon.p25.sharemyeventapi.dtos;

import java.time.LocalDateTime;

public class EventPageDto {
	private Long id;
	private String code;
	private String title;
	private String description;
	private LocalDateTime eventDate;
	private String organizerAuthId;
	private String organizerFirstname;
	private String organizerLastname;
	private String organizerEmail;
	private String street;
	private String zipCode;
	private String locality;
	private String additional;

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

	public String getOrganizerAuthId() {
		return organizerAuthId;
	}

	public void setOrganizerAuthId(String organizerAuthId) {
		this.organizerAuthId = organizerAuthId;
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

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getLocality() {
		return locality;
	}

	public void setLocality(String locality) {
		this.locality = locality;
	}

	public String getAdditional() {
		return additional;
	}

	public void setAdditional(String additional) {
		this.additional = additional;
	}

	@Override
	public String toString() {
		return "EventPageDto [id=" + id + ", code=" + code + ", title=" + title
				+ ", description=" + description + ", eventDate=" + eventDate
				+ ", organizerAuthId=" + organizerAuthId
				+ ", organizerFirstname=" + organizerFirstname
				+ ", organizerLastname=" + organizerLastname
				+ ", organizerEmail=" + organizerEmail + ", street=" + street
				+ ", zipCode=" + zipCode + ", locality=" + locality
				+ ", additional=" + additional + "]";
	}

}
