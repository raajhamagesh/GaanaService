package com.loginmodule.dao;

import com.loginmodule.model.User;

public interface UserDao {
	
	public User findUserByEmail(String email);

}
