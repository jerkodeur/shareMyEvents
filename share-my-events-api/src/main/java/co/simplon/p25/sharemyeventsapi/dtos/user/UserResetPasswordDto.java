package co.simplon.p25.sharemyeventsapi.dtos.user;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class UserResetPasswordDto {

	@NotBlank(message = "email_required")
	private String email;

	@NotBlank(message = "old_password_required")
	private String oldPassword;

	@Pattern(regexp = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$", message = "password_format")
	@NotBlank(message = "password_required")
	private String newPassword;

	public UserResetPasswordDto() {
		//
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getOldPassword() {
		return oldPassword;
	}
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	@Override
	public String toString() {
		return "UserResetPasswordDto [email=" + email
				+ ", oldPassword=[PROTECTED], newPassword=[PROTECTED]]";
	}

}
