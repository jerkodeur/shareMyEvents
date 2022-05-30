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

	@Column(name = "nickname")
	private String nickname;

	public Actor() {
	}

	public Actor(UUID uuid, String email, String nickname) {
		authId = uuid;
		this.email = email;
		this.nickname = nickname;
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

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	@Override
	public String toString() {
		return "Actor [authId=" + authId + ", email=" + email + ", nickname="
				+ nickname + "]";
	}

}
