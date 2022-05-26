package co.simplon.p25.sharemyeventapi.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.p25.sharemyeventapi.dtos.ActorSignUpDto;
import co.simplon.p25.sharemyeventapi.dtos.UserLogInDto;
import co.simplon.p25.sharemyeventapi.security.ActorJwt;
import co.simplon.p25.sharemyeventapi.services.UserServiceImpl;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	UserServiceImpl userService;

	private UserController() {
		// Ensures non-instantiability
	}

	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping("/sign-up")
	public void signUp(@RequestBody @Valid ActorSignUpDto inputs) {
		userService.signUp(inputs);
	}

	@PostMapping("/login")
	public ActorJwt logIn(@RequestBody @Valid UserLogInDto inputs) {
		return userService.login(inputs);
	}
}
