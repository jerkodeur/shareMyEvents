package co.simplon.p25.sharemyeventapi.dtos;

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

	@Size(min = 2, message = "firstname_length")
	@NotBlank(message = "firstname_required")
	private String firstname;

	@Size(min = 2, message = "lastname_length")
	@NotBlank(message = "lastname_required")
	private String lastname;

	private String gandalf_id;

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

	public String getGandalfId() {
		return gandalf_id;
	}

	public void setGandalfId(String gandalf_id) {
		this.gandalf_id = gandalf_id;
	}

	@Override
	public String toString() {
		return "ActorSignUpDto [email=" + email + ", password=" + "[PROTECTED]"
				+ ", firstname=" + firstname + ", lastname=" + lastname
				+ ", gandalf_id=" + gandalf_id + "]";
	}

}
