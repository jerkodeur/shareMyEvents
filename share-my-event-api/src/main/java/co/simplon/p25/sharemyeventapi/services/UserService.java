package co.simplon.p25.sharemyeventapi.services;

import javax.validation.Valid;

import co.simplon.p25.sharemyeventapi.dtos.ActorSignUpDto;
import co.simplon.p25.sharemyeventapi.dtos.UserLogInDto;
import co.simplon.p25.sharemyeventapi.security.ActorJwt;

public interface UserService {
	void signUp(@Valid ActorSignUpDto userSignUpInputs);
	ActorJwt login(@Valid UserLogInDto userLogInInputs);
}
