package com.loginmodule.service;

import com.loginmodule.dao.UserDao;
import com.loginmodule.dao.UserDaoImpl;
import com.loginmodule.model.User;

public class UserServiceImpl implements UserService{
	
	UserDao userDao = new UserDaoImpl();

	@Override
	public User findUserByEmail(String email) {
	
		return userDao.findUserByEmail(email);
	}

}
