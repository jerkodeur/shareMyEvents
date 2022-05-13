package co.simplon.p25.sharemyeventapi.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.MapKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "actors")
public class Actor extends AbstractEntity {

	@Column(name = "auth_id")
	private String authId;

	@Column(name = "email")
	private String email;

	@Column(name = "firstname")
	private String firstname;

	@Column(name = "lastname")
	private String lastname;

	@Column(name = "nickname")
	private String nickname;

	@ManyToMany
	@JoinTable(name = "participations", joinColumns = @JoinColumn(name = "actor_id"), inverseJoinColumns = @JoinColumn(name = "event_id"))
	@MapKeyJoinColumn(name = "availability_id")
	private List<Event> events = new ArrayList<>();

	public Actor() {
	}

	public Actor(String gandalfId, String email, String firstname,
			String lastname) {
		authId = gandalfId;
		this.email = email;
		this.firstname = firstname;
		this.lastname = lastname;
	}

	public String getGandalfId() {
		return authId;
	}

	public void setGandalfId(String gandalfId) {
		authId = gandalfId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	@Override
	public String toString() {
		return "Actor [gandalfId=" + authId + ", email=" + email
				+ ", firstname=" + firstname + ", lastname=" + lastname
				+ ", nickname=" + nickname + "]";
	}

}
