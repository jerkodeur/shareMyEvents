package co.simplon.p25.sharemyeventapi.dtos.event;

import java.time.LocalDateTime;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

public class EventCreateDto {

	@NotBlank(message = "title_required")
	@Length(max = 50)
	private String title;

	@NotEmpty(message = "description_required")
	private String description;

	@NotNull(message = "date_required")
	@DateTimeFormat
	@Future
	private LocalDateTime eventDate;

	// TODO Créer une validation si la rue est renseignée, mais pas la ville
	// @FullStreet
	private String street;

	@Pattern(regexp = "^(\\s*|\\d{5})$", message = "zip-code_format")
	// TODO Créer une validation si le code postal est renseigné, mais pas la
	// ville
	private String zipCode;

	private String locality;

	private String additional;

	private String organizerId;

	public EventCreateDto() {
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

	public void setEventDate(@DateTimeFormat LocalDateTime date) {
		eventDate = date;
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

	public String getOrganizerId() {
		return organizerId;
	}

	public void setOrganizerId(String organizerId) {
		this.organizerId = organizerId;
	}

	@Override
	public String toString() {
		return "EventCreateDto [title=" + title + ", description=" + description
				+ ", eventDate=" + eventDate + ", street=" + street + ", zipCode="
				+ zipCode + ", locality=" + locality + ", additional="
				+ additional + ", organizerId=" + organizerId + "]";
	}

}
