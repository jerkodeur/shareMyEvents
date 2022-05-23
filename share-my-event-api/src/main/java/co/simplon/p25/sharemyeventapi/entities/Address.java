package co.simplon.p25.sharemyeventapi.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "addresses")
public class Address extends AbstractEntity {

	@Column(name = "street")
	private String street;

	@Column(name = "zip_code")
	private String zipCode;

	@Column(name = "locality")
	private String locality;

	@Column(name = "additional")
	private String additional;

	@OneToOne(mappedBy = "address")
	private Event event;

	public Address() {
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
		return "Address [street=" + street + ", zipCode=" + zipCode
				+ ", locality=" + locality + ", additional=" + additional + "]";
	}

}
