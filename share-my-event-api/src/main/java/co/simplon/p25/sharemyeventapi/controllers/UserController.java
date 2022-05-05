package co.simplon.p25.sharemyeventapi.controllers;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.p25.sharemyeventapi.dtos.UserLogInDto;
import co.simplon.p25.sharemyeventapi.dtos.UserSignUpDto;
import co.simplon.p25.sharemyeventapi.services.UserServiceImpl;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    UserServiceImpl userService;
    
    public UserController(UserServiceImpl userService) {
	this.userService = userService;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/sign-up")
    public void signUp(@RequestBody @Valid UserSignUpDto userSignUpInputs) {
	userService.signUp(userSignUpInputs);
    }
    
    @PostMapping("/login")
    public void logIn(@RequestBody @Valid UserLogInDto userLoginInputs) {
	userService.login(userLoginInputs);
    }
}
