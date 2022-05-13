package co.simplon.p25.sharemyeventapi.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "availabilities")
public class Availability extends AbstractEntity {
	
	@Column(name = "name")
	private String name;

	public Availability() {}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Availability [name=" + name + "]";
	}
}
