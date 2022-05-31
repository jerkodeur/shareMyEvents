package co.simplon.p25.sharemyeventapi.dtos.user;

import javax.validation.constraints.NotBlank;

public class UserLogInDto {

	@NotBlank(message = "email_required")
	private String email;

	@NotBlank(message = "password_required")
	private String password;

	public UserLogInDto() {
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

	@Override
	public String toString() {
		return "UserLogInDto [email=" + email + ", password=" + "[PROTECTED]"
				+ "]";
	}

}
