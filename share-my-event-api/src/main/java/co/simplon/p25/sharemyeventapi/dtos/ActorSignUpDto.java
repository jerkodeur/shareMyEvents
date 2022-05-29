package co.simplon.p25.sharemyeventapi.dtos;

import java.util.UUID;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class ActorSignUpDto {

	@Pattern(regexp = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", message = "email_format")
	@NotBlank(message = "email_required")
	private String email;

	@NotBlank(message = "password_required")
	@Pattern(regexp = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$", message = "password_format")
	private String password;

	@Size(min = 2, message = "nickname_length")
	@NotBlank(message = "nickname_required")
	private String nickname;

	private UUID auth_id;

	public ActorSignUpDto() {
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public UUID getAuthId() {
		return auth_id;
	}

	public void setAuthId(UUID uuid) {
		auth_id = uuid;
	}

	@Override
	public String toString() {
		return "ActorSignUpDto [email=" + email + ", password=" + "[PROTECTED]"
				+ ", nickname=" + nickname + ", auth_id=" + auth_id + "]";
	}

}
