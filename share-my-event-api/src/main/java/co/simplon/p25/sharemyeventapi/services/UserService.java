package co.simplon.p25.sharemyeventapi.services;

import javax.validation.Valid;

import co.simplon.p25.sharemyeventapi.dtos.ActorSignUpDto;
import co.simplon.p25.sharemyeventapi.dtos.user.UserLogInDto;
import co.simplon.p25.sharemyeventapi.dtos.user.UserMailDto;
import co.simplon.p25.sharemyeventapi.dtos.user.UserResetPasswordDto;
import co.simplon.p25.sharemyeventapi.security.ActorJwt;

public interface UserService {
	void signUp(@Valid ActorSignUpDto inputs);
	ActorJwt login(@Valid UserLogInDto inputs);
	void lostPassword(@Valid UserMailDto inputs);
	void resetPassword(@Valid UserResetPasswordDto inputs);
}
