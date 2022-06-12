package co.simplon.p25.sharemyeventsapi.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "availabilities")
public class Availability extends AbstractEntity {

	@Column(name = "label")
	private String label;

	public Availability() {
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	@Override
	public String toString() {
		return "Availability [label=" + label + "]";
	}
}
