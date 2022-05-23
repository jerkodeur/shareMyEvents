package co.simplon.p25.sharemyeventapi.dtos.event;

import javax.validation.constraints.Pattern;

public final class EventAddressDto {

	// TODO Créer une validation si la rue est renseignée, mais pas la ville
	// @FullStreet
	private String street;

	@Pattern(regexp = "^(\\s*|\\d{5})$", message = "zip-code_format")
	// TODO Créer une validation si le code postal est renseigné, mais pas la
	// ville
	private String zipCode;
	private String locality;
	private String additional;

	public EventAddressDto() {
		// TODO Auto-generated constructor stub
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
		return "EventAdressDto [street=" + street + ", zipCode=" + zipCode
				+ ", locality=" + locality + ", additional=" + additional + "]";
	}

}
