package co.simplon.p25.sharemyeventapi.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class UserSignUpDto {
    
    @NotBlank(message = "email_required")
    @Pattern(regexp = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", message="email_format")
    private String email;
    
    @NotBlank(message = "password_required")
    @Pattern(regexp = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$", message="password_format")
    private String password;

    @NotBlank(message = "firstname_required")
    @Size(min = 2, message="firstname_length")
    private String firstname;

    @NotBlank(message = "lastname_required")
    @Size(min = 2, message="lastname_length")
    private String lastname;
    
    public UserSignUpDto() {
	// TODO Auto-generated constructor stub
    }
    
    public UserSignUpDto(String email, String password, String firstname,
	    String lastname) {
	super();
	this.email = email;
	this.password = password;
	this.firstname = firstname;
	this.lastname = lastname;
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

    @Override
    public String toString() {
	return "UserSignInDto [email=" + email + ", password=" + password
		+ ", firstname=" + firstname + ", lastname=" + lastname + "]";
    }
    
}
