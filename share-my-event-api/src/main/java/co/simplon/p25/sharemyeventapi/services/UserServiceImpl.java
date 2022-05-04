package co.simplon.p25.sharemyeventapi.services;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import co.simplon.p25.sharemyeventapi.dtos.UserLogInDto;
import co.simplon.p25.sharemyeventapi.dtos.UserSignUpDto;

@Service
public final class UserServiceImpl implements UserService {

    @Override
    public void signUp(@Valid UserSignUpDto userSignUpInputs) {
	System.out.println(userSignUpInputs);
    }

    @Override
    public void login(UserLogInDto userLogInInputs) {
	System.out.println(userLogInInputs);	
    }

}
