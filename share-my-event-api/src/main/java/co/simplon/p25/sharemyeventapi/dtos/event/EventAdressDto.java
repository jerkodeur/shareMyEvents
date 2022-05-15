package co.simplon.p25.sharemyeventapi.dtos.event;

public final class EventAdressDto {

	private String street;
	private String zipCode;
	private String locality;
	private String additional;

	public EventAdressDto() {
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
