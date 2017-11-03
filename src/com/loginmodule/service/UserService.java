package com.loginmodule.service;

import com.loginmodule.model.User;

public interface UserService {
	
	public User findUserByEmail(String email);

}
