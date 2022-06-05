package co.simplon.p25.sharemyeventsapi.services;

import javax.validation.Valid;

import co.simplon.p25.sharemyeventsapi.dtos.ActorSignUpDto;
import co.simplon.p25.sharemyeventsapi.dtos.user.UserLogInDto;
import co.simplon.p25.sharemyeventsapi.dtos.user.UserMailDto;
import co.simplon.p25.sharemyeventsapi.dtos.user.UserResetPasswordDto;
import co.simplon.p25.sharemyeventsapi.security.ActorJwt;

public interface UserService {
	void signUp(@Valid ActorSignUpDto inputs);
	ActorJwt login(@Valid UserLogInDto inputs);
	void lostPassword(@Valid UserMailDto inputs);
	void resetPassword(@Valid UserResetPasswordDto inputs);
}
