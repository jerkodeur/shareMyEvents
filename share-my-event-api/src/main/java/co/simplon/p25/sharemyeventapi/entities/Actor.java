package co.simplon.p25.sharemyeventapi.entities;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "actors")
public class Actor extends AbstractEntity {

	@Column(name = "auth_id")
	private UUID authId;

	@Column(name = "email")
	private String email;

	@Column(name = "firstname")
	private String firstname;

	@Column(name = "lastname")
	private String lastname;

	@Column(name = "nickname")
	private String nickname;

	public Actor() {
	}

	public Actor(UUID uuid, String email, String firstname, String lastname) {
		authId = uuid;
		this.email = email;
		this.firstname = firstname;
		this.lastname = lastname;
	}

	public UUID getAuthId() {
		return authId;
	}

	public void setAuthId(UUID authId) {
		this.authId = authId;
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
		return "Actor [authId=" + authId + ", email=" + email + ", firstname="
				+ firstname + ", lastname=" + lastname + ", nickname="
				+ nickname + "]";
	}

}
