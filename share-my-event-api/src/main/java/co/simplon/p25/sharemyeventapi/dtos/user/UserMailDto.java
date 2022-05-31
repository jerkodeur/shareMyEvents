package co.simplon.p25.sharemyeventapi.dtos.user;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class UserMailDto {

	@Pattern(regexp = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", message = "email_format")
	@NotBlank(message = "email_required")
	private String email;

	public UserMailDto() {
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "UserMailDto [email=" + email + "]";
	}

}
