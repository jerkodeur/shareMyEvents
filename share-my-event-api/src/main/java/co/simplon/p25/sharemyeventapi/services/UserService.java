package co.simplon.p25.sharemyeventapi.services;

import javax.validation.Valid;

import co.simplon.p25.sharemyeventapi.dtos.UserLogInDto;
import co.simplon.p25.sharemyeventapi.dtos.UserSignUpDto;

public interface UserService {
    void signUp(@Valid UserSignUpDto userSignUpInputs);
    void login(@Valid UserLogInDto userLogInInputs);
}
